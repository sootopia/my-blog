import { Outlet } from 'react-router-dom';
import PageHeader from '../header/PageHeader';
import PageFooter from '../footer/PageFooter';
import styled from 'styled-components';

const Main = styled.main`
  padding-top: 70px;
  min-height: 800px;
`;

const PageLayout = () => {
  return (
    <>
      <PageHeader />
      <Main>
        <Outlet />
      </Main>
      <PageFooter />
    </>
  );
};

export default PageLayout;
