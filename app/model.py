from .request import Requests as request_client


class App:
    def synonyms(word) -> dict:
        return request_client.norm_requests(word, "synonyms")