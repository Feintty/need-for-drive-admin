export const flatObject = (input: object) => {
  const getEntries: any = (o: string, prefix = "") =>
    Object.entries(o).flatMap(([k, v]) =>
      Object(v) === v ? getEntries(v, `${prefix}${k}.`) : [[`${prefix}${k}`, v]]
    );
  return Object.fromEntries(getEntries(input));
};
