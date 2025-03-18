export const potatoid = (len = 10, b = 36, c) =>
  crypto
    .getRandomValues(new Uint8Array(len))
    .reduce(
      (s, x) =>
        s +
        (typeof b === "string"
          ? b[x % b.length]
          : c
          ? c[x % c.length]
          : (x % (b = Math.min(Math.max(b, 2), 36))).toString(b)),
      ""
    )
