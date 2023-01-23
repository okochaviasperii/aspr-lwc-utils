export const toCamelCase = (str) => {
  const arr = str.split(/[\s-_]/g);
  let isFirstWord = true;
  return arr.reduce((acc, val) => {
    if (val) {
      if (isFirstWord) {
        isFirstWord = false;
        return val.toLowerCase();
      } else {
        return acc + val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
      }
    } else {
      return acc;
    }
  }, "")
}