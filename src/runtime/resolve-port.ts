const DEFAULT_PORT = 3000;
const MIN_PORT = 1;
const MAX_PORT = 65535;

export function resolvePort(value: string | undefined): number {
  if (value === undefined) {
    return DEFAULT_PORT;
  }

  const isDecimalInteger = /^\d+$/.test(value);
  const port = Number(value);

  if (
    !isDecimalInteger ||
    port < MIN_PORT ||
    port > MAX_PORT
  ) {
    throw new Error(
      `PORT must be a decimal integer between ${MIN_PORT} and ${MAX_PORT}; received "${value}".`,
    );
  }

  return port;
}