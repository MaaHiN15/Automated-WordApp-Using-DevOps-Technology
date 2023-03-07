FROM python:3.8-alpine

COPY requirements.txt /app

WORKDIR /app

RUN pip install -f requirements.txt

COPY . /app

EXPOSE 4000

ENTRYPOINT [ "python3" ]

CMD [ "main.py" ]



