import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type FavoriteUpdateInput = {
  user?: UserWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
