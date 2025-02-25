export const ucfirst = (str: string | undefined) => {
  if (!str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const padNumber = (num: number | undefined, size: number) => {
  if (!num) {
    return '';
  }
  let s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
};
