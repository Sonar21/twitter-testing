export type Post = {
  id: number;
  content: string;
  like: number;
  handle: string;
  name?: string;
  image?: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
  liked?: boolean;
  avatarUrl?: string;
};