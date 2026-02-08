from crewai import Agent
from langchain_openai import ChatOpenAI
from tools.kitchen_tools import KitchenTools

class KitchenAffiliateAgents:
    def __init__(self):
        self.llm = ChatOpenAI(model_name="gpt-4o-mini", temperature=0.7)
        self.tools = KitchenTools()

    def trend_researcher(self):
        return Agent(
            role='Trend Researcher',
            goal='Identify trending kitchen gadgets and seasonal topics with high affiliate potential',
            backstory="""You are an expert market analyst specializing in the kitchen and home decor niche. 
            You have a keen eye for what's trending on social media, Reddit, and Google Trends. 
            Your goal is to find products that people are actively searching for but might not have found the best deals for yet.""",
            llm=self.llm,
            tools=[self.tools.web_search],
            verbose=True,
            allow_delegation=False
        )

    def deal_hunter(self):
        return Agent(
            role='Deal Hunter',
            goal='Monitor and find the best price drops and deals for specific kitchen items',
            backstory="""You are a meticulous deal hunter. You know how to navigate affiliate networks, 
            track price history, and identify genuinely good offers. You focus on high-rated products 
            with significant discounts.""",
            llm=self.llm,
            tools=[self.tools.web_search, self.tools.amazon_price_tracker],
            verbose=True,
            allow_delegation=False
        )

    def content_strategist(self):
        return Agent(
            role='Content Strategist',
            goal='Transform trends and deals into a cohesive content calendar for blogs and videos',
            backstory="""You are a master of content marketing. You know how to take a raw deal or trend 
            and turn it into a compelling story. You understand SEO, click-through rates, and audience engagement.""",
            llm=self.llm,
            verbose=True,
            allow_delegation=True
        )

    def copywriter(self):
        return Agent(
            role='Copywriter',
            goal='Write high-conversion blog posts and engaging video scripts for kitchen products',
            backstory="""You are a persuasive writer who specializes in product reviews and lifestyle blogging. 
            Your writing is clear, engaging, and always includes strong calls to action. You know how to 
            weave affiliate links naturally into the content.""",
            llm=self.llm,
            tools=[self.tools.cms_publisher],
            verbose=True,
            allow_delegation=False
        )

    def video_producer(self):
        return Agent(
            role='Video Producer',
            goal='Generate professional marketing videos from scripts and manage video assets',
            backstory="""You are an expert video editor and producer. You know how to take a script 
            and turn it into a high-engagement short-form video. You use AI tools to automate the 
            visuals and voiceovers.""",
            llm=self.llm,
            tools=[self.tools.video_generator],
            verbose=True,
            allow_delegation=False
        )
