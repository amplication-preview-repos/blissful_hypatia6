import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  photo?: SortOrder;
  description?: SortOrder;
  purchaseLinks?: SortOrder;
  categoryId?: SortOrder;
};
