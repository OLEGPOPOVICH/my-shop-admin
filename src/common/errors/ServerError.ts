import { AxiosError } from "axios";

/**
 * Класс описывающий ошибки сервера
 */
export class ServerError extends Error {
  /** Объект ошибки */
  prevError: AxiosError;

  /**
   * Конструктор
   * @param {AxiosError} error Объект ошибки
   */
  constructor(error: AxiosError) {
    super(error?.message || "Ошибка соединения с сервером");

    this.name = "ServerError";
    this.prevError = error;

    Object.setPrototypeOf(this, ServerError.prototype);
  }
}
