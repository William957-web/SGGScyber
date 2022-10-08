import requests
import pymongo

# Connect to MongoDB

client = pymongo.MongoClient("mongodb+srv://yoni:<password>@cluster0.4b6it9r.mongodb.net/?retryWrites=true&w=majority")
failed = client['failed'].failed
success = client['success'].success
proxies = client['proxies'].proxies