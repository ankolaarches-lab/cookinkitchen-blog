import sqlite3
import os

class DatabaseManager:
    def __init__(self, db_path="database/kitchen_affiliate.db"):
        self.db_path = db_path
        self._init_db()

    def _init_db(self):
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            # Table for tracking products and deals
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS products (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    asin TEXT UNIQUE,
                    original_price TEXT,
                    discount_price TEXT,
                    affiliate_link TEXT,
                    last_updated DATETIME DEFAULT CURRENT_TIMESTAMP
                )
            """)
            # Table for tracking content (blogs/videos)
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS content (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    type TEXT, -- 'blog' or 'video'
                    title TEXT,
                    body TEXT,
                    status TEXT, -- 'draft', 'published'
                    published_url TEXT,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )
            """)
            conn.commit()

    def add_product(self, name, asin, original_price, discount_price, affiliate_link):
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT OR REPLACE INTO products (name, asin, original_price, discount_price, affiliate_link)
                VALUES (?, ?, ?, ?, ?)
            """, (name, asin, original_price, discount_price, affiliate_link))
            conn.commit()

    def add_content(self, content_type, title, body, status="draft"):
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO content (type, title, body, status)
                VALUES (?, ?, ?, ?)
            """, (content_type, title, body, status))
            conn.commit()
            return cursor.lastrowid
