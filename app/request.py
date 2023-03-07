import requests
import os
from dotenv import load_dotenv
load_dotenv()
from Prometheus.function import word_fetching_metric




class Requests_class:
    def __init__(self):
        pass
    def norm_requests(self, word, request_type): 
        word_fetching_metric.inc()
        print("request comes in")

        url = f"https://wordsapiv1.p.rapidapi.com/words/{word}/{request_type}"
        headers = {
            # "X-RapidAPI-Key": os.environ['api_key'],
            # "X-RapidAPI-Host": os.environ['api_host']
            "X-RapidAPI-Key": 'befe82a31fmsh52d17f8a9619f1ep18a47cjsn8ec61f408cc1',
            "X-RapidAPI-Host": 'wordsapiv1.p.rapidapi.com'
        }
        print(url)
        response = requests.request("GET", url, headers=headers)
        print(response.text)
        return(response.text)