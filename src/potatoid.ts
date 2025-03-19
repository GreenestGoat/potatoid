let potatoid = (
  len: number = 10,
  b: number | string = 36,
  c?: string
): string =>
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
    );

export default potatoid;
