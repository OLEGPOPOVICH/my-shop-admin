/* eslint-disable space-before-function-paren */
/* eslint-disable require-jsdoc */
export function delay<T>(
  data: T,
  delayTime?: number,
  error?: boolean
): Promise<T> {
  return new Promise((resolve, reject) => {
    if (error) {
      reject(new Error("Ошибка запроса"));
    }

    setTimeout(() => resolve(data), delayTime || 1000);
  });
}
