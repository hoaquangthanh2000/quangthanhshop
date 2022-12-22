import { productType } from "../product/typeitem";

export type cartItemState = {
  cartItem: productType;
  quantity: number;
};

export interface listCartState {
  listCartItem: cartItemState[];
}
