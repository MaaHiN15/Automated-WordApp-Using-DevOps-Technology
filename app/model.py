from .request import Requests_class 


class App_class:
    def synonyms(word) -> dict:
        return Requests_class.norm_requests(word, "synonyms")
    def antonyms(word) -> dict:
        return Requests_class.norm_requests(word, "antonyms")
    def definitions(word) -> dict:
        return Requests_class.norm_requests(word, "definitions")
    def examples(word) -> dict:
        return Requests_class.norm_requests(word, "examples")
    def rhymes(word) -> dict:
        return Requests_class.norm_requests(word, "rhymes")
    def pronunciation(word) -> dict:
        return Requests_class.norm_requests(word, "pronunciation")
    def syllables(word) -> dict:
        return Requests_class.norm_requests(word, "syllables")
    def frequency(word) -> dict:
        return Requests_class.norm_requests(word, "frequency")
    def typeOf(word) -> dict:
        return Requests_class.norm_requests(word, "typeOf")
    def hasTypes(word) -> dict:
        return Requests_class.norm_requests(word, "hasTypes")
    def partOf(word) -> dict:
        return Requests_class.norm_requests(word, "partOf")
    def hasParts(word) -> dict:
        return Requests_class.norm_requests(word, "hasParts")
    def instanceOf(word) -> dict:
        return Requests_class.norm_requests(word, "instanceOf")
    def hasInstances(word) -> dict:
        return Requests_class.norm_requests(word, "hasInstances")
    def similarTo(word) -> dict:
        return Requests_class.norm_requests(word, "similarTo")
    def also(word) -> dict:
        return Requests_class.norm_requests(word, "also")
    def entails(word) -> dict:
        return Requests_class.norm_requests(word, "entails")
    def memberOf(word) -> dict:
        return Requests_class.norm_requests(word, "memberOf")
    def hasMembers(word) -> dict:
        return Requests_class.norm_requests(word, "hasMembers")
    def substanceOf(word) -> dict:
        return Requests_class.norm_requests(word, "substanceOf")
    def hasSubstances(word) -> dict:
        return Requests_class.norm_requests(word, "hasSubstances")
    def inCategory(word) -> dict:
        return Requests_class.norm_requests(word, "inCategory")
    def hasCategories(word) -> dict:
        return Requests_class.norm_requests(word, "hasCategories")
    def usageOf(word) -> dict:
        return Requests_class.norm_requests(word, "usageOf")
    def hasUsages(word) -> dict:
        return Requests_class.norm_requests(word, "hasUsages")
    def inRegion(word) -> dict:
        return Requests_class.norm_requests(word, "inRegion")
    def regionOf(word) -> dict:
        return Requests_class.norm_requests(word, "regionOf")
    def pertainsTo(word) -> dict:
        return Requests_class.norm_requests(word, "pertainsTo")


