const DEFAULT_HOST = "127.0.0.1";

export function resolveHost(value: string | undefined): string {
  if (value === undefined) {
    return DEFAULT_HOST;
  }

  if (value.length === 0 || value.trim() !== value) {
    throw new Error(
      `HOST must be a non-empty hostname or IP address without surrounding whitespace; received "${value}".`,
    );
  }

  return value;
}