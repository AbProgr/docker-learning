# specify base image
FROM node:12.16.1-alpine3.9

# specify working directory
WORKDIR /home/app

# add dependencies
## copying package.json to prevent yarn install from running everytime we make a change in source code
COPY package.json .
RUN yarn install --prod
## copying rest of source code
COPY . .

# startup command
CMD ["yarn", "start"]