const http = require('http');

const requestListener = (request, response) => {
  //Simulate an asynchronous operation that may fail.
  someAsyncOperation()
    .then(() => {
      response.writeHead(200);
      response.end('Hello, World!');
    })
    .catch(error => {
      console.error('Error handling request:', error);
      response.writeHead(500);
      response.end('Internal Server Error');
    });
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');

async function someAsyncOperation() {
  //Simulate an asynchronous operation that can fail
  return new Promise((resolve, reject) => {
    const random = Math.random(); 
    if (random > 0.5) {
      resolve();
    } else {
      reject(new Error('Something went wrong'));
    }
  })
}