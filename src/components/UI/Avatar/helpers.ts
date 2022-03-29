import {
  getFirstLetterCaps,
  generateColorFromString,
  generateRandonColor,
} from "@utils";

export const getFirstLetterCapsFullname = (fullname: string | null) => {
  if (!fullname) {
    return "ФИО";
  }

  return getFirstLetterCaps(fullname);
};

export const generateBgColor = (
  isGenerateBgColor: boolean,
  fullname: string | null
) => {
  if (!isGenerateBgColor) {
    return {};
  }

  if (fullname) {
    return {
      backgroundColor: generateColorFromString(fullname),
    };
  }

  return {
    backgroundColor: generateRandonColor(),
  };
};
