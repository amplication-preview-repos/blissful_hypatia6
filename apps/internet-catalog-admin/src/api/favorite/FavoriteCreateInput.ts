import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type FavoriteCreateInput = {
  user?: UserWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
