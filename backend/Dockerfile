FROM python:3.10-slim-buster

LABEL maintainer="Smit Gabani <gabanismit11@gmail.com>"
LABEL description="Crumble Flask back-end"

WORKDIR /backend

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

ENV FLASK_ENV=development

EXPOSE 4567

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=4567"]
