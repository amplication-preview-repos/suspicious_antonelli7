export type BlogEvent = {
  createdAt: Date;
  eventTimestamp: Date | null;
  eventType: string | null;
  id: string;
  postId: string | null;
  updatedAt: Date;
};
