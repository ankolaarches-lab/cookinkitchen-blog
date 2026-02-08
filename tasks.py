from crewai import Task
from textwrap import dedent

class KitchenAffiliateTasks:
    def research_trends(self, agent):
        return Task(
            description=dedent("""
                Research the top 5 trending kitchen gadgets for the current month. 
                Focus on items that are popular on TikTok and Reddit. 
                Identify the key benefits and the typical price range for these items.
            """),
            agent=agent,
            expected_output="A detailed report on 5 trending kitchen gadgets with market context."
        )

    def find_deals(self, agent, trends_report):
        return Task(
            description=dedent(f"""
                Based on the following trends report:
                {trends_report}
                
                Find the best deals/discounts currently available on Amazon or other major retailers 
                for these items. Include the original price, the discounted price, and the affiliate-ready 
                product name.
            """),
            agent=agent,
            expected_output="A list of specific products with current deals and price information."
        )

    def create_content_plan(self, agent, deals_list):
        return Task(
            description=dedent(f"""
                Review the following deals:
                {deals_list}
                
                Create a content plan for 1 blog post (Top 5 list) and 3 video scripts (Shorts/TikTok). 
                Specify the hook, the key selling points, and the target keywords for each piece of content.
            """),
            agent=agent,
            expected_output="A structured content plan including blog title and video outlines."
        )

    def write_blog_post(self, agent, content_plan):
        return Task(
            description=dedent(f"""
                Using the content plan:
                {content_plan}
                
                1. Write a full, SEO-optimized blog post for the 'Top 5 Kitchen Gadget Deals' of the month. 
                2. Include an introduction, detailed reviews for each item, and a strong conclusion.
                3. Once written, use the 'cms_publisher' tool to post it as a draft to the website.
            """),
            agent=agent,
            expected_output="A link to the published blog post or confirmation of local file save."
        )

    def generate_videos(self, agent, content_plan):
        return Task(
            description=dedent(f"""
                Using the video outlines in the content plan:
                {content_plan}
                
                Generate 3 separate videos using the video_generator tool. 
                Each video should have a script and a catchy title.
            """),
            agent=agent,
            expected_output="Confirmation of 3 videos generated and saved to the database."
        )
