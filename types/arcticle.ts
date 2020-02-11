export type Article = Array<ArticleItem>;

export type ArticleItem = {
  id: number;
  uid: number;
  title: string;
  cover: string;
  desc: string;
  createTime: number;
  updateTime: number;
};
