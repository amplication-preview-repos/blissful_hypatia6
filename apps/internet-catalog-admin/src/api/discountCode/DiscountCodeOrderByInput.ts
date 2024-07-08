import { SortOrder } from "../../util/SortOrder";

export type DiscountCodeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  discountCode?: SortOrder;
  userId?: SortOrder;
  productId?: SortOrder;
};
