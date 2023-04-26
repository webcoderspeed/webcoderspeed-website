export interface IPost {
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  createdAt: string;
  image: string;
}

