import { SortOrder } from "../../util/SortOrder";

export type BlogEventOrderByInput = {
  createdAt?: SortOrder;
  eventTimestamp?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  updatedAt?: SortOrder;
};
