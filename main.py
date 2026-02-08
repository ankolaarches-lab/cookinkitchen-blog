import os
from dotenv import load_dotenv
from crewai import Crew, Process
from agents import KitchenAffiliateAgents
from tasks import KitchenAffiliateTasks

load_dotenv()

def run_affiliate_crew():
    print("### Starting Kitchen Affiliate Crew ###")
    
    agents = KitchenAffiliateAgents()
    tasks = KitchenAffiliateTasks()

    # Initialize Agents
    researcher = agents.trend_researcher()
    hunter = agents.deal_hunter()
    strategist = agents.content_strategist()
    writer = agents.copywriter()
    # producer = agents.video_producer() # Handled in Phase 3

    # Initialize Tasks
    task1 = tasks.research_trends(researcher)
    task2 = tasks.find_deals(hunter, "") 
    task3 = tasks.create_content_plan(strategist, "")
    task4 = tasks.write_blog_post(writer, "")
    # task5 = tasks.generate_videos(producer, "")
    
    task2.context = [task1]
    task3.context = [task2]
    task4.context = [task3]

    crew = Crew(
        agents=[researcher, hunter, strategist, writer],
        tasks=[task1, task2, task3, task4],
        process=Process.sequential,
        verbose=True
    )

    result = crew.kickoff()
    return result

if __name__ == "__main__":
    if not os.getenv("OPENAI_API_KEY"):
        print("Please set OPENAI_API_KEY in your .env file.")
    else:
        result = run_affiliate_crew()
        print("\n\n########################")
        print("## FINAL OUTPUT ##")
        print("########################\n")
        print(result)
