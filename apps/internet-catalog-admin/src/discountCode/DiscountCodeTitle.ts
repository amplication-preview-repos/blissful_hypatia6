import { DiscountCode as TDiscountCode } from "../api/discountCode/DiscountCode";

export const DISCOUNTCODE_TITLE_FIELD = "discountCode";

export const DiscountCodeTitle = (record: TDiscountCode): string => {
  return record.discountCode?.toString() || String(record.id);
};
