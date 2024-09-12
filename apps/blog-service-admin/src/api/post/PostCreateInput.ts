import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type PostCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  content?: string | null;
  publishedAt?: Date | null;
  title?: string | null;
};
