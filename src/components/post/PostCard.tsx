import Post from '../../types/post';
import styled from 'styled-components';

interface PostCardProps {
  post: Post;
}

const ImageContainer = styled.figure`
  position: relative;
  overflow: hidden;
  margin-bottom: 24px;
  aspect-ratio: 4 / 3;
  border-radius: 32px;
  background-color: #f1f5f9;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Category = styled.h4`
  font-family:
    'Gabarito',
    'Pretendard',
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #4f46e5;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  display: -webkit-box;
  font-size: 20px;
  font-weight: 700;
  color: #000;
  line-height: 1.5;
  max-height: 60px;
  margin-bottom: 28px;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const BottomInfo = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #94a3b8;
`;

const HashTags = styled.ul`
  display: flex;
  margin-top: 28px;
  gap: 8px;

  li {
    display: inline-flex;
    font-size: 14px;
    font-weight: 600;
    color: #64748b;
    padding: 0 8px;
    height: 28px;
    border-radius: 10px;
    background-color: #e2e8f0;
    align-items: center;
  }
`;

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post__card">
      <ImageContainer style={{ backgroundImage: `url(${post.thumbnail})` }} />
      <Category>{post.category}</Category>
      <Title>{post.subject}</Title>
      <BottomInfo>
        {post.date} · 조회 {post.read}
      </BottomInfo>
      <HashTags>
        {post.hashtags.map(tag => (
          <li key={tag}>#{tag}</li>
        ))}
      </HashTags>
    </div>
  );
};

export default PostCard;
