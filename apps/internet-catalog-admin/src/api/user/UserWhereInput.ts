import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FavoriteListRelationFilter } from "../favorite/FavoriteListRelationFilter";
import { DiscountCodeListRelationFilter } from "../discountCode/DiscountCodeListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  favorites?: FavoriteListRelationFilter;
  discountCodes?: DiscountCodeListRelationFilter;
};
