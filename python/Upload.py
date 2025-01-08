!pip install astrapy pandas matplotlib

from datetime import datetime, timedelta
import random
import uuid
from astrapy import DataAPIClient
import json
import pandas as pd

def generate_mock_data(num_posts=100):
    post_types = ['carousel', 'reel', 'static_image']
    data = []

    # Start date - 30 days ago
    start_date = datetime.now() - timedelta(days=30)

    for _ in range(num_posts):
        post = {
            'post_id': str(uuid.uuid4()),
            'post_type': random.choice(post_types),
            'posted_at': (start_date + timedelta(days=random.randint(0, 30))).isoformat(),
            'likes': random.randint(50, 1000),
            'shares': random.randint(10, 200),
            'comments': random.randint(5, 100),
            'views': random.randint(1000, 10000),
            'save_count': random.randint(5, 50)
        }
        data.append(post)

    return data

def connect_to_astra_db():
    # Replace with your token
    ASTRA_DB_TOKEN = "{Your Token}"
    ASTRA_DB_API_ENDPOINT = "Your endpoint"

    # Initialize the client
    client = DataAPIClient(token=ASTRA_DB_TOKEN)
    db = client.get_database_by_api_endpoint(ASTRA_DB_API_ENDPOINT)

    return db

def store_data_in_astra(db, data):
    # Create collection if it doesn't exist
    collection = db.create_collection("engagement_data")

    # Store each post in the collection
    for post in data:
        collection.insert_one(post)

    return collection

def main():
    try:
        # Generate mock data
        print("Generating mock data...")
        mock_data = generate_mock_data(100)

        # Connect to Astra DB
        print("Connecting to Astra DB...")
        db = connect_to_astra_db()

        # Store data
        print("Storing data in Astra DB...")
        collection = store_data_in_astra(db, mock_data)

        # Print sample of the data
        df = pd.DataFrame(mock_data)
        print("\nSample of generated data:")
        print(df.head())

        print(f"\nTotal records generated and stored: {len(mock_data)}")

        # Verify data in collection
        print("\nVerifying stored data...")
        stored_count = collection.find({}).count()
        print(f"Number of documents in collection: {stored_count}")

    except Exception as e:
        print(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    main()