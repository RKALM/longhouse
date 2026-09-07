import assert from "node:assert/strict";
import { test } from "node:test";

import { resolveHost } from "../../dist/runtime/resolve-host.js";

test("uses loopback when HOST is missing", () => {
  assert.equal(resolveHost(undefined), "127.0.0.1");
});

test("uses a configured HOST", () => {
  assert.equal(resolveHost("localhost"), "localhost");
  assert.equal(resolveHost("0.0.0.0"), "0.0.0.0");
});

test("rejects empty HOST values", () => {
  for (const value of ["", "   "]) {
    assert.throws(
      () => resolveHost(value),
      /HOST must be a non-empty hostname or IP address/,
    );
  }
});

test("rejects HOST values with surrounding whitespace", () => {
  assert.throws(
    () => resolveHost(" localhost "),
    /HOST must be a non-empty hostname or IP address/,
  );
});