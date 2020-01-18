export function isAlphaOrParen(string: string) {
  return /^[a-zA-Z()]+$/.test(string);
}

export function isNumericString(string: string) {
  return /^\d+\.\d+$/.test(string);
}

export function isPrice(string: string) {
  return /^\d+(?:[.,]\d+)*$/.test(string);
}

export function ucfirst(string: string) {
  if (!string) {
    return string;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function lcfirst(string: string) {
  if (!string) {
    return string;
  }

  return string.charAt(0).toLowerCase() + string.slice(1);
}

export function deCapitalize(string: string) {
  if (!string) {
    return string;
  }

  return string.toLowerCase();
}

export function randomHash() {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}
