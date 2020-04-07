const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
  // as it's a docker based application, when we start the app with docker-compose
  // it auto identifies the redis host with service name in docker-compose.yml
  host: "redis-server",
  port: 6379,
});

client.set("hits", 0);

app.get("/", (req, res) => {
  client.get("hits", (err, hits) => {
    res.send(`No of hits: ${hits}`);
    client.set("hits", parseInt(hits) + 1);
  });
});

app.listen(3000, (err) => {
  console.log("Server up at: http://localhost:3000");
});

// this is docker based project
// build image using: docker-compose up
// re-build after changes using: docker-compose up --build
// view running docker-compose services: docker-compose ps
// stop the conatiners: docker-compose down
// note: all these cmds are to be run from within the docker-compose.yml file location