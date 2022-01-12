import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  LOPAD_PRODUCTS,
  ProductActionType,
  REMOVE_PRODUCT,
} from "./actions";

type SpecificationsType = {
  [specification: string]: unknown;
};

export type ProductType = {
  id: number | null;
  title: string;
  desc: string;
  imgUrl: string;
  price: number;
  basePrice: number;
  category: string;
  isSale: boolean;
  specifications?: SpecificationsType;
};

const initialState = {
  products: [] as ProductType[],
};

export type InitialStateType = typeof initialState;

export const productsReducer = (
  state = initialState,
  action: ProductActionType
): InitialStateType => {
  switch (action.type) {
    case LOPAD_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product.id !== action.payload),
        ],
      };
    case EDIT_PRODUCT:
      return state;
    default:
      return state;
  }
};
