import { rest } from "msw";
import { DB } from "@database";
import { SERVER_URL, PRODUCTS_URL, PRODUCTS_SETTING_FIELDS_URL } from "@api";
import { getSearchParams } from "../utils";
import { STATUS_200, STATUS_TEXT_OK } from "../constants";

export const products = [
  rest.get(`${SERVER_URL}${PRODUCTS_URL}`, (req, res, context) => {
    const searchParams = getSearchParams(req.url.search);
    const data = DB.getProducts(searchParams);

    return res(
      context.status(STATUS_200),
      context.json({
        ...data,
        meta: {
          status: STATUS_200,
          statusText: STATUS_TEXT_OK,
          desc: null,
        },
      })
    );
  }),

  rest.get(`${SERVER_URL}${PRODUCTS_SETTING_FIELDS_URL}`, (_, res, context) => {
    const data = DB.getSettingsFields();

    return res(
      context.status(STATUS_200),
      context.json({
        ...data,
        meta: {
          status: STATUS_200,
          statusText: STATUS_TEXT_OK,
          desc: null,
        },
      })
    );
  }),
];
