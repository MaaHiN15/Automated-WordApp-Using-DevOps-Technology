from pymongo import MongoClient
import os
def db_connect():
    client = MongoClient(os.environ['DB_URL'])
    # client.db.auth.drop()
    return client.db.auth
db_connect()