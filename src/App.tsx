import './assets/css/index.css';
import GlobalStyle from './styles/GlobalStyles';
import './assets/css/fonts.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostDetailPage from './pages/PostDetailPage';
import PostWritePage from './pages/PostWritePage';
import LoginPage from './pages/LoginPage';
import PageLayout from './components/common/layout/PageLayout';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/post/:id" element={<PostDetailPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/write" element={<PostWritePage />}></Route>
            {/* 404페이지 추가 예정 */}
          </Route>
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default App;
