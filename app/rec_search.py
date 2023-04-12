from flask import session
from db import recent_searches_connect
table = recent_searches_connect()

def find_recents():
    id = session.get('_id')
    return table.find_one({'_id': id})

class Recent_search:
    def __init__(self):
        self.table = table
        self.id = session.get('_id')
        self.clip = {}
        self.clip['_id'] = session.get('_id')
        self.clip['recent_searches'] = []

    def check_recents(self):
        temp = find_recents()
        if temp is None:
            print("self clip creation")
            self.table.insert_one(self.clip)
            return []
        return temp['recent_searches']
    
    def add_recents(self, recent_word):
        recent_data = find_recents()
        if recent_data is None:
            temp_list = [recent_word]
            self.clip['recent_searches'] = temp_list
            print("inserting self clip in add recents")
            self.table.insert_one(self.clip)
        else:
            data = recent_data['recent_searches']
            if len(data) < 5:
                print("data appending without while loop")
                data.append(recent_word)
                self.table.update_one({'_id':self.id}, { "$set" : { "recent_searches" : data }})
            else:
                while len(data) >= 5:
                    print("loop comes in")
                    data.pop(0)
                data.append(recent_word)
                self.table.update_one({'_id':self.id}, { "$set" : { "recent_searches" : data }})

            