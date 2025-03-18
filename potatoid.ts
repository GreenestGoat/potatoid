export const potatoid = (len: number = 10, base: number = 36): string =>
  crypto.getRandomValues(new Uint8Array(len))
    .reduce((s,b) => s + (b % base).toString(base), '');
