const http = require("http");

const server = http.createServer((request, result) => {
  if (request.url === "/") {
    result.write("It is your home... page!");
    result.end();
  } else if (request.url === "/about") {
    result.write("It is about your secrets!");
    result.end();
  } else {
    result.write(`
  <h1>Opa!</h1>
  <p>Your are wrong with this addres!</p>
  <a href="/">Back home</a>`);
    result.end();
  }
});

server.listen(5000);
