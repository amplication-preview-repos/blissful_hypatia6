import { InputJsonValue } from "../../types";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { FavoriteUpdateManyWithoutProductsInput } from "./FavoriteUpdateManyWithoutProductsInput";
import { DiscountCodeUpdateManyWithoutProductsInput } from "./DiscountCodeUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  name?: string | null;
  photo?: InputJsonValue;
  description?: string | null;
  purchaseLinks?: string | null;
  category?: CategoryWhereUniqueInput | null;
  favorites?: FavoriteUpdateManyWithoutProductsInput;
  discountCodes?: DiscountCodeUpdateManyWithoutProductsInput;
};
