import { Product } from "../product/Product";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  products?: Array<Product>;
};