import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type FavoriteWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
