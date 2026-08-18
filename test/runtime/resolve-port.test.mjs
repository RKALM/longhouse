import assert from "node:assert/strict";
import { test } from "node:test";

import { resolvePort } from "../../dist/runtime/resolve-port.js";

test("uses port 3000 when PORT is missing", () => {
  assert.equal(resolvePort(undefined), 3000);
});

test("uses a valid configured PORT", () => {
  assert.equal(resolvePort("8080"), 8080);
});

test("rejects malformed PORT values", () => {
  for (const value of ["banana", "8080.5", "1e3", " 8080 "]) {
    assert.throws(
      () => resolvePort(value),
      /PORT must be a decimal integer between 1 and 65535/,
    );
  }
});

test("rejects PORT values outside the allowed range", () => {
  for (const value of ["0", "65536"]) {
    assert.throws(
      () => resolvePort(value),
      /PORT must be a decimal integer between 1 and 65535/,
    );
  }
});