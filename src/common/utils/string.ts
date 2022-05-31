/* eslint-disable no-bitwise */
/* eslint-disable id-length */
import tinycolor from "tinycolor2";

export const getFirstLetterCaps = (str: string, separator = "") =>
  str
    .split(" ")
    .map((str) => str.substr(0, 1).toUpperCase())
    .join(separator);

export const getHashCodeFromString = (str: string) => {
  let hash = 5381;

  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
  }

  return hash;
};

export const hashStringToColor = (str: string) => {
  const hash = getHashCodeFromString(str);
  const r = (hash & 0xff0000) >> 16;
  const g = (hash & 0x00ff00) >> 8;
  const b = hash & 0x0000ff;
  return `#${`0${r.toString(16)}`.substr(-2)}${`0${g.toString(16)}`.substr(
    -2
  )}${`0${b.toString(16)}`.substr(-2)}`;
};

export const generateColorFromString = (str: string) => hashStringToColor(str);
export const generateRandonColor = () => tinycolor.random().toRgbString();

export const generateStringId = () => Math.random().toString(36).substr(2, 9);
