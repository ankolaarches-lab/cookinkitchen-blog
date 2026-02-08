import requests
import os
import json
from abc import ABC, abstractmethod

class CMSPublisher(ABC):
    @abstractmethod
    def publish(self, title, content, tags=None):
        pass

class WordPressPublisher(CMSPublisher):
    def __init__(self, url, username, application_password):
        self.url = f"{url.rstrip('/')}/wp-json/wp/v2/posts"
        self.auth = (username, application_password)

    def publish(self, title, content, tags=None):
        payload = {
            "title": title,
            "content": content,
            "status": "draft", # Start as draft for safety
            "categories": [1] # Default category
        }
        response = requests.post(self.url, auth=self.auth, json=payload)
        if response.status_code == 201:
            return response.json().get('link')
        else:
            raise Exception(f"Failed to publish to WordPress: {response.text}")

class GhostPublisher(CMSPublisher):
    def __init__(self, url, api_key):
        self.url = f"{url.rstrip('/')}/ghost/api/v3/admin/posts/"
        self.api_key = api_key

    def publish(self, title, content, tags=None):
        # Ghost uses JWT for auth, implementation omitted for brevity but follows similar flow
        pass

class PublisherFactory:
    @staticmethod
    def get_publisher():
        cms_type = os.getenv("CMS_TYPE", "wordpress").lower()
        if cms_type == "wordpress":
            return WordPressPublisher(
                url=os.getenv("WP_URL"),
                username=os.getenv("WP_USERNAME"),
                application_password=os.getenv("WP_APP_PASSWORD")
            )
        return None
