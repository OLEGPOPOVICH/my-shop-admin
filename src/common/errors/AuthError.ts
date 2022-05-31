import { AxiosError } from "axios";

/**
 * Класс описывающий ошибки неавторизованного пользователя
 */
export class AuthError extends Error {
  /** Объект ошибки */
  prevError: AxiosError;

  /**
   * Конструктор
   * @param {AxiosError} error Объект ошибки
   */
  constructor(error: AxiosError) {
    super("Ошибка авторизации");

    this.name = "AuthError";
    this.prevError = error;

    Object.setPrototypeOf(this, AuthError.prototype);
  }
}
