import json
from pymongo import MongoClient

# Replace these with your MongoDB connection details
MONGODB_URI = 'mongodb://kenneth123:kenneth123@ac-7mvtvkx-shard-00-00.2lyhzod.mongodb.net:27017,ac-7mvtvkx-shard-00-01.2lyhzod.mongodb.net:27017,ac-7mvtvkx-shard-00-02.2lyhzod.mongodb.net:27017/?ssl=true&replicaSet=atlas-4hpoa7-shard-0&authSource=admin&retryWrites=true&w=majority'
DATABASE_NAME = 'test'
COLLECTION_NAME = 'employees'
JSON_FILE_PATH = 'data/User.json'

# Connect to the MongoDB cluster
client = MongoClient(MONGODB_URI)
db = client[DATABASE_NAME]
collection = db[COLLECTION_NAME]

# Load the JSON file
with open(JSON_FILE_PATH, 'r') as file:
    data = json.load(file)

# Insert the JSON data into the MongoDB collection
result = collection.insert_many(data)
print(f'Inserted {len(result.inserted_ids)} documents into the collection.')