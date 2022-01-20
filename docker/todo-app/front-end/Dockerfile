FROM node:14-alpine AS todofrontend

WORKDIR /todo-app/front-end/

EXPOSE 3000

ADD node_modules.tar.gz todofrontend

COPY . todofrontend

CMD [ "npm", "start" ]
