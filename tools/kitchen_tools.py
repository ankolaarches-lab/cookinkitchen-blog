from langchain.tools import tool
import requests
import os
from database.db_manager import DatabaseManager

class KitchenTools:
    def __init__(self):
        self.db = DatabaseManager()
    
    @tool("web_search")
    def web_search(query: str):
        """Search the web for information about kitchen trends or products."""
        # Using a simple duckduckgo search as a fallback if no API key is provided
        from langchain_community.tools import DuckDuckGoSearchRun
        search = DuckDuckGoSearchRun()
        return search.run(query)

    @tool("amazon_price_tracker")
    def amazon_price_tracker(self, product_name: str):
        """Get current price and deal information for a kitchen product on Amazon.
        Saves the found product to the local database.
        """
        # In a real implementation, we would use python-amazon-paapi here.
        # Check environment variables for real API usage
        using_real_api = os.getenv("AMAZON_ACCESS_KEY") and os.getenv("AMAZON_SECRET_KEY")
        
        if using_real_api:
            # Placeholder for real PAAPI call
            # result = call_amazon_api(product_name)
            pass

        # Fallback/Mock logic for development
        mock_data = {
            "Air Fryer": {"asin": "B07W67NQMN", "original_price": "$120", "discount_price": "$89", "rating": "4.8"},
            "Espresso Machine": {"asin": "B00CH9QWOU", "original_price": "$500", "discount_price": "$399", "rating": "4.7"},
            "KitchenAid Mixer": {"asin": "B00004SGFW", "original_price": "$450", "discount_price": "$380", "rating": "4.9"},
            "Smart Meat Thermometer": {"asin": "B07H8W66D5", "original_price": "$99", "discount_price": "$75", "rating": "4.6"},
            "Non-Toxic Cookware Set": {"asin": "B0892CH1XY", "original_price": "$300", "discount_price": "$249", "rating": "4.5"}
        }
        
        found_item = None
        for key in mock_data:
            if key.lower() in product_name.lower():
                found_item = mock_data[key]
                found_item['name'] = key
                break
        
        if found_item:
            # Save to DB
            self.db.add_product(
                name=found_item['name'],
                asin=found_item['asin'],
                original_price=found_item['original_price'],
                discount_price=found_item['discount_price'],
                affiliate_link=f"https://amazon.com/dp/{found_item['asin']}?tag={os.getenv('AMAZON_ASSOCIATE_TAG', 'trial-20')}"
            )
            return found_item
        
        return "Deal not found for this specific item, check general kitchen deals."

    @tool("cms_publisher")
    def cms_publisher(self, title: str, content: str):
        """Publishes a blog post to the curated Next.js blog or fallback CMS.
        Ensures the content is written to the dynamic content directory.
        """
        from tools.publisher import PublisherFactory
        publisher = PublisherFactory.get_publisher()
        
        # Priority: Write to Next.js Content Folder for our integrated site
        blog_content_dir = "src/content/blogs"
        os.makedirs(blog_content_dir, exist_ok=True)
        
        # Sanitize filename: Replace spaces with hyphens, lowercase, remove special chars
        import re
        safe_title = re.sub(r'[^a-zA-Z0-9\s-]', '', title).strip().lower()
        safe_title = re.sub(r'[\s]+', '-', safe_title)
        filename = f"{blog_content_dir}/{safe_title}.md"
        
        try:
            with open(filename, "w") as f:
                # Add Frontmatter for Next.js to parse
                f.write(f"---\ntitle: \"{title}\"\ndate: \"{os.popen('date +%Y-%m-%d').read().strip()}\"\n---\n\n{content}")
            
            # If real CMS is configured, also push there
            log_msg = f"Saved to local blog: {filename}"
            if publisher:
                link = publisher.publish(title, content)
                log_msg += f" | Also published to CMS: {link}"
            
            # Save to central DB
            self.db.add_content(
                content_type="blog",
                title=title,
                body=content,
                status="published",
                published_url=filename
            )
            return log_msg
        except Exception as e:
            return f"Error saving blog post: {str(e)}"
