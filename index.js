var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello from CodeSandbox!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
const express = require("express");
const app = express();

const PORT = 3303;

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/views/index.html");
});

app.get("/sobre", function (req, res) {
  res.sendFile(__dirname + "/src/views/about.html");
});
// ROTA UTILIZANDO MIDDLEWARE(404)
app.use(function (req, res) {
  res.status(404).sendFile(__dirname + "/src/views/404.html");
});

app.listen(PORT, () => {
  console.log("running...");
});
