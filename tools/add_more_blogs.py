#!/usr/bin/env python3
import requests, time
import sys

url = 'https://dancjwbxcycncrkdiyug.supabase.co/rest/v1/blog_posts'
h = {'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhbmNqd2J4Y3ljbmNya2RpeXVnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTU1OTk4MCwiZXhwIjoyMDg3MTM1OTgwfQ.aJI1r5bhhgV4N3bzyYS0keBGoLmk0PAbfA3PqtHD-dU', 'Content-Type': 'application/json'}

posts = [
    {'title': 'The Secret to Restaurant-Quality Fried Rice', 'slug': 'secret-fried-rice', 'category': 'Cooking Techniques', 'date': '2026-03-25', 'published': True, 'excerpt': 'The key to great fried rice is cold rice and high heat.', 'content': 'Restaurant fried rice is crisp and flavorful. Use day-old rice and high heat.', 'highlights': 'Cold rice, high heat'},
    {'title': 'How to Make Perfect Scrambled Eggs', 'slug': 'perfect-scrambled', 'category': 'Cooking Techniques', 'date': '2026-03-26', 'published': True, 'excerpt': 'Low heat, patience, and constant stirring.', 'content': 'Creamy eggs come from low heat and removing while still wet.', 'highlights': 'Low heat, remove early'},
    {'title': 'The Best Way to Cook Pasta Al Dente', 'slug': 'pasta-al-dente', 'category': 'Cooking Techniques', 'date': '2026-03-27', 'published': True, 'excerpt': 'Salt heavily and test early.', 'content': 'Perfect pasta is about timing. Salt heavily and test two minutes early.', 'highlights': 'Salt, test early'},
    {'title': 'How to Make Caramelized Onions Perfectly', 'slug': 'caramelized-onions', 'category': 'Cooking Techniques', 'date': '2026-03-28', 'published': True, 'excerpt': 'Low and slow is the key.', 'content': 'Caramelized onions take time but transform any dish.', 'highlights': '30-45 minutes, low heat'},
    {'title': 'The Secret to Crispy Skin Roast Chicken', 'slug': 'crispy-roast-chicken', 'category': 'Cooking Techniques', 'date': '2026-03-29', 'published': True, 'excerpt': 'Dry the skin thoroughly and use high heat.', 'content': 'Dry skin and high heat make crispy chicken.', 'highlights': 'Air dry, high heat'},
    {'title': 'How to Make Restaurant-Quality Pizza at Home', 'slug': 'restaurant-pizza', 'category': 'Baking', 'date': '2026-03-30', 'published': True, 'excerpt': 'Hot oven and proper dough make all the difference.', 'content': 'Hot oven and well-rested dough make restaurant pizza.', 'highlights': 'Pizza stone, hot oven'},
    {'title': 'The Best Oils for Every Cooking Method', 'slug': 'best-oils-cooking', 'category': 'Pantry', 'date': '2026-03-31', 'published': True, 'excerpt': 'Not all oils are created equal.', 'content': 'Use the right oil for the right job.', 'highlights': 'Smoke point matters'},
    {'title': 'How to Choose the Right Cutting Board', 'slug': 'cutting-board-material', 'category': 'Accessories', 'date': '2026-04-01', 'published': True, 'excerpt': 'Wood, plastic, bamboo—here is what works best.', 'content': 'Each material has pros and cons.', 'highlights': 'End-grain wood'},
]

for p in posts:
    try:
        r = requests.post(url, headers=h, json=p, timeout=5)
        print(f"{r.status_code} {p['slug']}")
    except Exception as e:
        print(f"Error: {e}")
    time.sleep(0.5)
print("Done")