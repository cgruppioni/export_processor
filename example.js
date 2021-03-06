const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  const { method, url, headers } = request;
  let body = [];

  request.on('error', (err) => {
    response.statusCode = 500;
    response.setHeader('Content-Type', 'text/plain');
    response.end(err.stack);
    console.error(err.stack);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    content = JSON.stringify(JSON.parse(body).case.content);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    // returns case content back to rails
    response.end(content);
  });
})

server.listen(port, hostname, () => {
  console.log('here');
  // call vue here? how to pull logic?
  console.log(`Server running at http://${hostname}:${port}/`);
})
