import requests
import pymongo
import dotenv
import os
import random
dotenv.load_dotenv(override=True)
# Connect to MongoDB

client = pymongo.MongoClient(os.getenv('db'))
failed = client['failed'].failed
success = client['success'].success

def run():
    radom = ''.join(["{}".format(random.randint(0, 9)) for num in range(0, 6)])
    result = requests.post('',data={'txtName':''})