import { createServer } from "node:http";

export function createNodeHttpServer() {
  return createServer((_request, response) => {
    const body = JSON.stringify({
      error: "Longhouse request handling is not implemented yet.",
    });

    response.writeHead(501, {
      "content-type": "application/json; charset=utf-8",
    });

    response.end(body);
  });
}