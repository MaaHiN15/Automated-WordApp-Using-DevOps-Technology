from pymongo import MongoClient
import os
def db_connect():
    client = MongoClient('mongodb+srv://maahin:admin@maahin-cluster.qsy8xid.mongodb.net/?retryWrites=true&w=majority')
    # client = MongoClient('mongodb://maahin:admin@mongo-app:27017')
    # client.db.auth.drop()
    return client.db.auth
db_connect()