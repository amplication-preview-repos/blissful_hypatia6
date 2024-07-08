import { JsonValue } from "type-fest";
import { Favorite } from "../favorite/Favorite";
import { DiscountCode } from "../discountCode/DiscountCode";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  favorites?: Array<Favorite>;
  discountCodes?: Array<DiscountCode>;
};
