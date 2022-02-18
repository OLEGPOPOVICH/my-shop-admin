import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  SET_PRODUCTS,
  SET_PRODUCTS_ERROR,
  REMOVE_PRODUCT,
  SET_SETTINGS_FIELDS,
  SET_SETTINGS_FIELDS_ERROR,
  ProductActionType,
} from "./actions";

type SpecificationsType = {
  [k: string]: unknown;
};

export type ProductType = {
  id: string | null;
  title: string | null;
  desc: string | null;
  categoryName: string | null;
  category: string | null;
  price: number | null;
  discountPrice: number | null;
  discountPercent: number | null;
  purchasePrice: number | null;
  imgUrl: string | null;
  specifications?: SpecificationsType;
};

export type ProductsDataType = {
  products: ProductType[] | [];
  total: number;
};

export type SettingsFieldType = {
  label: string;
  name: string;
  checked: boolean;
};

export type ErrorType = null | string;

const initialState = {
  productsData: {
    products: [] as ProductType[],
    total: 0,
  },
  errors: {
    products: null as ErrorType,
    settingsFields: null as ErrorType,
  },
  settingsFields: [] as SettingsFieldType[],
};

type InitialStateType = typeof initialState;

export const productsReducer = (
  state = initialState,
  action: ProductActionType
): InitialStateType => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        productsData: { ...action.payload },
        errors: {
          ...state.errors,
          products: null,
        },
      };
    case SET_PRODUCTS_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          products: action.payload,
        },
      };
    case ADD_PRODUCT:
      return {
        ...state,
        productsData: {
          ...state.productsData,
          products: [...state.productsData.products, action.payload],
        },
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        productsData: {
          ...state.productsData,
          products: [
            ...state.productsData.products.filter(
              (product) => product.id !== action.payload
            ),
          ],
        },
      };
    case EDIT_PRODUCT:
      return state;
    case SET_SETTINGS_FIELDS:
      return {
        ...state,
        settingsFields: [...action.payload],
        errors: {
          ...state.errors,
          settingsFields: null,
        },
      };
    case SET_SETTINGS_FIELDS_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          settingsFields: action.payload,
        },
      };
    default:
      return state;
  }
};
