export function shortMonthToNumber(mnth: string): number {
  switch (mnth.toUpperCase()) {
    case 'JAN':
      return 1;
    case 'FEB':
      return 2;
    case 'MRT':
      return 3;
    case 'APR':
      return 4;
    case 'MAY':
      return 5;
    case 'JUN':
      return 6;
    case 'JUL':
      return 7;
    case 'AUG':
      return 8;
    case 'SEP':
      return 9;
    case 'OKT':
      return 10;
    case 'NOV':
      return 11;
    case 'DEC':
      return 12;
    default:
      return 0;
  }
}
