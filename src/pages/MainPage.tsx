import styled from 'styled-components';
import Category from '../types/category';
import Post from '../types/post';
import FeaturedPostCard from '../components/post/FeaturedPostCard';
import PostCard from '../components/post/PostCard';

const Hero = styled.section`
  padding-top: 130px;
  padding-bottom: 60px;
  text-align: center;

  h1 {
    font-size: 40px;
    font-weight: 700;
    color: #000;
    line-height: 1.5;
    margin-bottom: 28px;
  }

  p {
    font-size: 18px;
    font-weight: 600;
    color: #475569;
    line-height: 1.66;
  }
`;

const Categories = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  gap: 10px;

  button {
    display: inline-flex;
    font-weight: 700;
    color: #334155;
    height: 48px;
    padding: 0 24px;
    border-radius: 26px;
    background-color: #e2e8f0;
    align-items: center;

    &:hover:not(.active) {
      opacity: 0.6;
    }

    &.active {
      color: #fff;
      background-color: #0f172a;
    }
  }
`;

const PostsWrapper = styled.section`
  padding-bottom: 200px;
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 64px;
`;

const categories: Category[] = [
  {
    id: 1,
    name: '전체',
    filter: 'all',
  },
  {
    id: 2,
    name: 'Project',
    filter: 'project',
  },
  {
    id: 3,
    name: 'Study',
    filter: 'study',
  },
  {
    id: 3,
    name: 'Study',
    filter: 'study',
  },
  {
    id: 4,
    name: 'OS',
    filter: 'os',
  },
  {
    id: 5,
    name: 'Tools',
    filter: 'tools',
  },
  {
    id: 6,
    name: 'CI/CD',
    filter: 'cicd',
  },
];

const MainPage = () => {
  const posts: Post[] = [
    {
      id: 7,
      category: 'Project',
      subject:
        '블로그 포스팅 제목입니다. 제목은 최대 세 줄까지 보여줄 예정입니다. 각 카테고리별 첫 게시물만 이 배열로 보여집니다.',
      date: '2024-11-19',
      read: 382,
      hashtags: ['React', 'Typescript', 'Node.js'],
      thumbnail: 'https://via.placeholder.com/565x384',
    },
    {
      id: 6,
      category: 'Project',
      subject: '블로그 포스팅 제목입니다. 제목은 최대 두 줄까지 보여줄 예정입니다.',
      date: '2024-11-19',
      read: 382,
      hashtags: ['React', 'Typescript', 'Node.js'],
      thumbnail: 'https://via.placeholder.com/565x384',
    },
    {
      id: 5,
      category: 'Project',
      subject: '블로그 포스팅 제목입니다. 제목은 최대 두 줄까지 보여줄 예정입니다.',
      date: '2024-11-19',
      read: 382,
      hashtags: ['React', 'Typescript', 'Node.js'],
      thumbnail: 'https://via.placeholder.com/565x384',
    },
    {
      id: 4,
      category: 'Project',
      subject: '블로그 포스팅 제목입니다. 제목은 최대 두 줄까지 보여줄 예정입니다.',
      date: '2024-11-19',
      read: 382,
      hashtags: ['React', 'Typescript', 'Node.js'],
      thumbnail: 'https://via.placeholder.com/565x384',
    },
    {
      id: 3,
      category: 'Project',
      subject: '블로그 포스팅 제목입니다. 제목은 최대 두 줄까지 보여줄 예정입니다.',
      date: '2024-11-19',
      read: 382,
      hashtags: ['React', 'Typescript', 'Node.js'],
      thumbnail: 'https://via.placeholder.com/565x384',
    },
    {
      id: 2,
      category: 'Project',
      subject: '블로그 포스팅 제목입니다. 제목은 최대 두 줄까지 보여줄 예정입니다.',
      date: '2024-11-19',
      read: 382,
      hashtags: ['React', 'Typescript', 'Node.js'],
      thumbnail: 'https://via.placeholder.com/565x384',
    },
    {
      id: 1,
      category: 'Project',
      subject: '블로그 포스팅 제목입니다. 제목은 최대 두 줄까지 보여줄 예정입니다.',
      date: '2024-11-19',
      read: 382,
      hashtags: ['React', 'Typescript', 'Node.js'],
      thumbnail: 'https://via.placeholder.com/565x384',
    },
  ];

  const [featuredPost, ...restPosts] = posts;

  return (
    <>
      <Hero>
        <div className="container px-5">
          <h1>
            꾸준한 성장을 도모하는 <br />
            프론트엔드 개발자 박수현의 기술 블로그입니다.
          </h1>
          <p>
            실무에서 느꼈던 점이나 취미로 만들어봤던 것들, 사이드 프로젝트 등. <br />
            다양한 주제로 포스팅을 해보려 합니다. 부족하지만 편하게 봐 주시면 감사하겠습니다.
          </p>
        </div>
      </Hero>

      <Categories>
        {categories.map(category => (
          <button key={category.id} className={category.id === 1 ? 'active' : ''}>
            {category.name}
          </button>
        ))}
      </Categories>

      <PostsWrapper>
        <div className="container px-5">
          <div className="mb-24">
            <FeaturedPostCard post={featuredPost} />
          </div>

          <PostGrid>
            {restPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </PostGrid>
        </div>
      </PostsWrapper>
    </>
  );
};

export default MainPage;
