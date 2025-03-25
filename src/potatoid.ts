let potatoid = (l: number = 10, b: string | number = 36): string =>
  crypto
    .getRandomValues(new Uint8Array(l))
    .reduce(
      (s, x) =>
        s +
        (typeof b === "string" && b.trim()
          ? (b = b.replace(/\s+/g, ""))[x % b.length]
          : (x % (b = Math.min(Math.max(+b || 36, 2), 36))).toString(b)),
      ""
    );

export default potatoid;
