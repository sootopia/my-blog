interface Post {
  id: number;
  category: string;
  subject: string;
  date: string;
  read: number;
  hashtags: string[];
  thumbnail: string;
}

export default Post;
