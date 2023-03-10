from prometheus_client import Counter, Gauge, Summary, Histogram, CollectorRegistry

registry = CollectorRegistry()

count_home_page_metric = Counter('home_page_endpoint_request', 'Total request of home page endpoint', registry=registry)

user_creation_metric = Counter('user_creation_total', 'Total number of user registered', registry=registry)

user_login_metric = Counter('total_login', 'Total number of login', registry=registry)

word_fetching_metric = Counter('word_fetching_metric', 'Total number of words fetching', registry=registry)

