FROM python:3.8-alpine

COPY requirements.txt /application

WORKDIR /application

RUN pip install -f requirements.txt

COPY . /application

EXPOSE 4000

ENTRYPOINT [ "python3" ]

CMD [ "main.py" ]



