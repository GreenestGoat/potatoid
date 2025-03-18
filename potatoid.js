export const potatoid = (len = 10, base = 36) =>
  crypto
    .getRandomValues(new Uint8Array(len))
    .reduce((s, b) => s + (b % base).toString(base), "")
