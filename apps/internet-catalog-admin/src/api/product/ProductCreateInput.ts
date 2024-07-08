import { InputJsonValue } from "../../types";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { FavoriteCreateNestedManyWithoutProductsInput } from "./FavoriteCreateNestedManyWithoutProductsInput";
import { DiscountCodeCreateNestedManyWithoutProductsInput } from "./DiscountCodeCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  name?: string | null;
  photo?: InputJsonValue;
  description?: string | null;
  purchaseLinks?: string | null;
  category?: CategoryWhereUniqueInput | null;
  favorites?: FavoriteCreateNestedManyWithoutProductsInput;
  discountCodes?: DiscountCodeCreateNestedManyWithoutProductsInput;
};
