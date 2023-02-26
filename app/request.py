import requests
import os
from dotenv import load_dotenv
load_dotenv()




class Requests:
    def norm_requests(word, request_type) -> dict: 
        url = f"https://wordsapiv1.p.rapidapi.com/words/{word}/{request_type}"
        headers = {
            "X-RapidAPI-Key": os.environ['api_key'],
            "X-RapidAPI-Host": os.environ['api_host']
        }
        response = requests.request("GET", url, headers=headers)
        return(response.text)