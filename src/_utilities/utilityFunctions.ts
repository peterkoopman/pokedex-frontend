export const ucfirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const padNumber = (num: number, size: number) => {
  let s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
};
