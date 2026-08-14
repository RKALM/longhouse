import assert from "node:assert/strict";
import { once } from "node:events";
import { test } from "node:test";

import { createNodeHttpServer } from "../../dist/platform/node-http/create-node-http-server.js";

test("compiled HTTP server returns the temporary 501 response", async () => {
  const server = createNodeHttpServer();

  server.listen(0, "127.0.0.1");
  await once(server, "listening");

  try {
    const address = server.address();

    assert.ok(address);
    assert.notEqual(typeof address, "string");

    const response = await fetch(
      `http://127.0.0.1:${address.port}`,
    );

    assert.equal(response.status, 501);
    assert.equal(
      response.headers.get("content-type"),
      "application/json; charset=utf-8",
    );

    assert.deepEqual(await response.json(), {
      error: "Longhouse request handling is not implemented yet.",
    });
  } finally {
    const closed = once(server, "close");
    server.close();
    await closed;
  }
});