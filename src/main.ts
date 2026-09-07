import { createNodeHttpServer } from "./platform/node-http/create-node-http-server.js";
import { resolvePort } from "./runtime/resolve-port.js";
import { resolveHost } from "./runtime/resolve-host.js";

const host = resolveHost(process.env.HOST);
const port = resolvePort(process.env.PORT);

const server = createNodeHttpServer();

server.listen(port, host, () => {
  console.log(`Longhouse listening on http://${host}:${port}`);
});
