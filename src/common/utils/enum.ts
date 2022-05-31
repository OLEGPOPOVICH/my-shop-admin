/* eslint-disable require-jsdoc */
export function getEnumValueByEnumVKey<T, V extends keyof T>(
  checkedEnum: T,
  enumValue: V
): T[V] {
  return checkedEnum[enumValue];
}
