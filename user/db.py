from pymongo import MongoClient
import os
db_address = os.environ['DB_ADDRESS']
def db_connect():
    # client = MongoClient('mongodb+srv://maahin:admin@maahin-cluster.qsy8xid.mongodb.net/?retryWrites=true&w=majority')
    client = MongoClient(f'{db_address}')
    # client.db.auth.drop()
    return client.db.auth
db_connect()