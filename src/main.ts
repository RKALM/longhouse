import { createNodeHttpServer } from "./platform/node-http/create-node-http-server.js";
import { resolvePort } from "./runtime/resolve-port.js";

const host = "127.0.0.1";
const port = resolvePort(process.env.PORT);

const server = createNodeHttpServer();

server.listen(port, host, () => {
  console.log(`Longhouse listening on http://${host}:${port}`);
});
