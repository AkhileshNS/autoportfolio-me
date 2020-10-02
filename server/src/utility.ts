export const convertToStatements = (str: string | null) =>
  str
    ? str
        .split('\n')
        .map((item: string) => item.trim())
        .filter(
          (item: string) => Boolean(item) && item.toLowerCase() !== 'see less'
        )
        .map((item) => {
          if (!/[a-z]/i.test(item[0])) {
            return item.slice(2);
          }
          return item;
        })
    : [];
