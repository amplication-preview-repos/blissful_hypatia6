import { InputJsonValue } from "../../types";
import { FavoriteUpdateManyWithoutUsersInput } from "./FavoriteUpdateManyWithoutUsersInput";
import { DiscountCodeUpdateManyWithoutUsersInput } from "./DiscountCodeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  favorites?: FavoriteUpdateManyWithoutUsersInput;
  discountCodes?: DiscountCodeUpdateManyWithoutUsersInput;
};
