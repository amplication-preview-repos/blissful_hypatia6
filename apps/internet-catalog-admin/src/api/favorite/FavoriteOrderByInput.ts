import { SortOrder } from "../../util/SortOrder";

export type FavoriteOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  productId?: SortOrder;
};
