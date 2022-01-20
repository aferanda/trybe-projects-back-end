FROM mjgargani/puppeteer:trybe1.0 AS todotests

WORKDIR /todo-app/tests/

ADD node_modules.tar.gz .

COPY . .

CMD [ "npm", "test" ]

