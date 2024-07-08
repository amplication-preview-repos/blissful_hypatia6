import { JsonValue } from "type-fest";
import { Category } from "../category/Category";
import { Favorite } from "../favorite/Favorite";
import { DiscountCode } from "../discountCode/DiscountCode";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  photo: JsonValue;
  description: string | null;
  purchaseLinks: string | null;
  category?: Category | null;
  favorites?: Array<Favorite>;
  discountCodes?: Array<DiscountCode>;
};
