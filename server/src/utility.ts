export const convertToStatements = (str: string | null) =>
  str
    ? str
        .split('\n')
        .map((item: string) => item.trim())
        .filter((item: string) => Boolean(item))
    : [];
