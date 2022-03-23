## Stage one
## This stage builds an app
FROM node:lts-alpine AS appBuild

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

# Build dist
RUN npm run build


## Stage two
## This stage takes build from above and runs an app
FROM node:lts-alpine

WORKDIR /usr/app
COPY package*.json ./

RUN npm install --only=production

COPY --from=appBuild /usr/app/build ./build

#Expose port
EXPOSE ${SERVER_PORT}

CMD [ "npm", "run", "start" ]
