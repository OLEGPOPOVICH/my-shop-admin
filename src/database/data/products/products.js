import meatJSON from "./meat.json";
import vegJSON from "./veg.json";
import juicesJSON from "./juices.json";
import settingsFieldsJSON from "./settingsFields.json";

export const meat = meatJSON;

export const veg = vegJSON;

export const juices = juicesJSON;

export const products = [...meat, ...veg, ...juices];

export const settingsFields = settingsFieldsJSON;
