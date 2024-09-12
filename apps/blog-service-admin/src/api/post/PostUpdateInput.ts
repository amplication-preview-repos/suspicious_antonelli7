import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type PostUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  content?: string | null;
  publishedAt?: Date | null;
  title?: string | null;
};
