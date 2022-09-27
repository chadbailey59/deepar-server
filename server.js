const path = require("path");
const express = require("express");
var cors = require("cors");

const app = express();
//const http = require("http");
//const server = http.createServer(app);
app.use(cors());

app.use(express.static("public"));

// Run the server and report out to the logs
app.listen(3939, function (err, address) {
  console.log(`Your app is listening on 3939`);
});
