FROM node:5.1.1

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

RUN npm run build

# go back to /rideness-frontend
WORKDIR /rideness-frontend

ENV NODE_PATH "./src"
ENV HOST 127.0.0.1

EXPOSE 8080
EXPOSE 3030

# CMD ["pm2", "start", "./bin/start.sh", "--no-daemon", "-i", "0"]
CMD ["npm", "start"]
