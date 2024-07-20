import http from 'node:http';
import { generateData } from './generateData';

const server = http.createServer();

server.on('request', async (request, response) => {
  if (request.url === '/stream') {
    response.writeHead(200, {
      'Content-Type': 'text/plain',
      'Transfer-Encoding': 'chunked',
    });

    for await (const chunk of generateData()) {
      console.log('Sending: ', chunk);
      response.write(`${JSON.stringify(chunk)}`);
    }

    return response.end();
  }

  return response.end('Call "/stream" to get stream');
});

server.listen(3333, () => console.log('Server running on Port:3333'));
