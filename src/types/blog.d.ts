export interface BlogContent {
  slug: string;
  data: BlogContentData;
}

export interface BlogContentData {
  title?: string;
  description?: string;
  pubDate?: string;
  image?: string;
  tags?: string[];
}
