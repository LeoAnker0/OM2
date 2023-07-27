FROM python:3

WORKDIR /app

RUN apt-get update && apt-get install -y libpq-dev  # Install libpq-dev for asyncpg


COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY ./app /code/app

ENV PORT=80


EXPOSE 80

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80", "--reload"]
#CMD [ "python", "./main.py"]