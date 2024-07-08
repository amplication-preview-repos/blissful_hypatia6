import { User } from "../user/User";
import { Product } from "../product/Product";

export type Favorite = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  product?: Product | null;
};
