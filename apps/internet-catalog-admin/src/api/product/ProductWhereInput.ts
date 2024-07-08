import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { FavoriteListRelationFilter } from "../favorite/FavoriteListRelationFilter";
import { DiscountCodeListRelationFilter } from "../discountCode/DiscountCodeListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  photo?: JsonFilter;
  description?: StringNullableFilter;
  purchaseLinks?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
  favorites?: FavoriteListRelationFilter;
  discountCodes?: DiscountCodeListRelationFilter;
};
