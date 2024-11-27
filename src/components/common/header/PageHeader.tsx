import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  border-bottom: 1px solid #dee2e6;
  z-index: 1010;
`;

const Logo = styled.div`
  a {
    display: flex;
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
    font-size: 24px;
    font-weight: 600;
    color: #000;
    gap: 16px;
    align-items: center;
  }

  span {
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    color: #475569;
    line-height: 1.2;
    padding: 4px 8px;
    border-radius: 7px;
    background-color: #f1f5f9;
  }
`;

const Navbar = styled.nav`
  display: flex;
  gap: 48px;
  align-items: center;

  ul {
    display: flex;
    gap: 30px;
    align-items: center;

    a {
      font-weight: 500;
      color: #475569;

      &:hover:not(.active) {
        opacity: 0.5;
      }

      &.active {
        font-weight: 700;
        color: #0f172a;
      }
    }
  }
`;

const PageHeader = () => {
  return (
    <Header>
      <div className="container h-full flex items-center justify-between">
        <Logo>
          <Link to="/">
            Tech Blog <span>Soohyun Park</span>
          </Link>
        </Logo>
        <Navbar>
          <ul>
            <li>
              <NavLink to="/">블로그</NavLink>
            </li>
            <li>
              <NavLink to="/login">로그인</NavLink>
            </li>
          </ul>
        </Navbar>
      </div>
    </Header>
  );
};

export default PageHeader;
