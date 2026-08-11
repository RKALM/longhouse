import { createNodeHttpServer } from "./platform/node-http/create-node-http-server.js";

const host = "127.0.0.1";
const port = 3000;

const server = createNodeHttpServer();

server.listen(port, host, () => {
  console.log(`Longhouse listening on http://${host}:${port}`);
});
