FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Build dist
RUN npm run build

#Expose port
EXPOSE ${SERVER_PORT}

CMD [ "npm", "start" ]
