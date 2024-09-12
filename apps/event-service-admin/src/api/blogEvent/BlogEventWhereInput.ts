import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BlogEventWhereInput = {
  eventTimestamp?: DateTimeNullableFilter;
  eventType?: StringNullableFilter;
  id?: StringFilter;
  postId?: StringNullableFilter;
};
