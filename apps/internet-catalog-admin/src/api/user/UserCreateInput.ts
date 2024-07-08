import { InputJsonValue } from "../../types";
import { FavoriteCreateNestedManyWithoutUsersInput } from "./FavoriteCreateNestedManyWithoutUsersInput";
import { DiscountCodeCreateNestedManyWithoutUsersInput } from "./DiscountCodeCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  favorites?: FavoriteCreateNestedManyWithoutUsersInput;
  discountCodes?: DiscountCodeCreateNestedManyWithoutUsersInput;
};
