FROM node:5.6.0

# cache npm install when package.json hasn't changed
WORKDIR /tmp
ADD package.json package.json
RUN npm install
RUN npm install -g pm2
RUN npm install -g concurrently
RUN npm install -g better-npm-run

RUN mkdir /rideness-frontend
RUN cp -a /tmp/node_modules /rideness-frontend

WORKDIR /rideness-frontend
ADD . /rideness-frontend/

ENV NODE_ENV production
ENV APIPORT 3030
ENV PORT 8080
ENV API_URL https://rideness.herokuapp.com

RUN npm run build

# go back to /rideness-frontend
WORKDIR /rideness-frontend

EXPOSE 8080
EXPOSE 3030

CMD ["pm2", "start", "app.json", "--no-daemon", "-i", "0"]
