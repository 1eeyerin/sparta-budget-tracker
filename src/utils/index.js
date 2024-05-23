export * from "./localStorage";

const regExp = /\B(?=(\d{3})+(?!\d))/g;

export const numberWithCommas = (num, currency = "") => {
  const intNum = parseInt(num, 10);

  if (Number.isNaN(intNum)) return "";
  if (!intNum) return `0${currency}`;

  const commas = intNum.toString().replace(regExp, ",");
  return commas + currency;
};

export const hexToRGB = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  return `rgb(${r}, ${g}, ${b})`;
};
