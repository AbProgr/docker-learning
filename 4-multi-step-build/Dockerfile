FROM node:12.16.1-alpine3.9 as builder
WORKDIR /home/app
COPY package.json .
COPY yarn.lock .
RUN yarn install --prod
COPY . .
RUN ["yarn", "build"]

FROM nginx
EXPOSE 80
COPY --from=builder /home/app/build /usr/share/nginx/html

# this is a sample way to build and serve production react app with nginx
# build the prod image: docker build -t abprogr/web-app-nginx .
# start the container: docker run -p 3000:80 abprogr/web-app-nginx
# now web app will be served from nginx when we browse at: http://localhost:3000
