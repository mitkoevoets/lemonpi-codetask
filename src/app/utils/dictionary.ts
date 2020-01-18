export interface Dictionary<T> {
  [key: string]: T;
}

export function hasProperties(object: object): boolean {
  return Object.keys(object).length > 0;
}
