# use some base image
FROM alpine

# install additional programs
RUN apk add --update redis

# primary command to run when container starts
CMD ["redis-server"]

#-------------------------------------------------------------------------------------------------
# Steps:
#-------------------------------------------------------------------------------------------------
# docker build .    ---> returns an image id  <<OR>> docker build -t abprogr/redis-server . 
# docker run <above image id> <<OR>> docker run abprogr/redis-server
# docker ps -all   ---> get container id from above image id
# docker start <above container id>
# docker exec -it <above container id> redis-cli   ---> provides redis cli on the above container
#-------------------------------------------------------------------------------------------------