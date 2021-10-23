const http = require("http");
const { join } = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    // BLOCKING CODE!!!
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(i, j);
      }
    }
    res.end("Alex Lee create me");
  } else res.end("Error page");
});

server.listen(5000, () => {
  console.log("Server is running...");
});
