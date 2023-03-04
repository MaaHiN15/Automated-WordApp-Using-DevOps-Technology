import requests
import os
from dotenv import load_dotenv
load_dotenv()
from Prometheus.function import word_fetching_metric




class Requests_class:
    def norm_requests(word,request_type): 
        word_fetching_metric.inc()
        print("request comes in")

        url = f"https://wordsapiv1.p.rapidapi.com/words/{word}/{request_type}"
        headers = {
            "X-RapidAPI-Key": os.environ['api_key'],
            "X-RapidAPI-Host": os.environ['api_host']
        }
        print(url)
        response = requests.request("GET", url, headers=headers)
        print(response.text)
        return(response.text)