import { User } from "../user/User";
import { Product } from "../product/Product";

export type DiscountCode = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  discountCode: string | null;
  user?: User | null;
  product?: Product | null;
};
