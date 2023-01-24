import * as dotenv from 'dotenv';
dotenv.config();

import process from 'node:process';
import { httpServer } from './http_server';
import WebSocket, { createWebSocketStream, WebSocketServer } from 'ws';
import { HTTP_PORT, WS_HOST, WS_PORT } from './config';
import { appRouter } from './app.router';
import { processClientMessage, processError } from './helpers/process.helper';

const wss = new WebSocketServer({ port: WS_PORT, host: WS_HOST });
const { port, host } = wss.options;

wss.on('connection', (ws: WebSocket.WebSocket): void => {
  console.log(`New connection initialized`);

  const duplex = createWebSocketStream(ws);

  duplex.on('data', async (data) => {
    try {
      const [command, payload] = processClientMessage(data.toString());
      const answer = await appRouter(command, ...payload);
      duplex._write(answer, 'utf-8', (err) => {
        if (err) console.error(err);
      });
    } catch (error: unknown) {
      processError(error);
    }
  });
});

process.on('SIGINT', () => {
  httpServer.close();
  console.log('\nHTTP Server was closed');
  wss.close();
  console.log('WebSocketServer was closed');
});

httpServer.listen(HTTP_PORT);

console.log(`Static http server started on the ${HTTP_PORT} port`);

console.log(`WebSocket parameters:
  port: ${port}
  host: ${host}
`);
