import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type DiscountCodeCreateInput = {
  discountCode?: string | null;
  user?: UserWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};