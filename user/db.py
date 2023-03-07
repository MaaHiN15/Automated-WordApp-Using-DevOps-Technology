from pymongo import MongoClient
import os
def db_connect():
    client = MongoClient('mongodb+srv://maahin:admin@maahin-cluster.qsy8xid.mongodb.net/?retryWrites=true&w=majority')
    # client = MongoClient(os.environ['DB_URL'])
    # client.db.auth.drop()
    return client.db.auth
db_connect()