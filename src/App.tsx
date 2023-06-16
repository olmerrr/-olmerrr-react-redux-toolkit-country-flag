import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

function App() {
  // <Route exact/> атрибут  exact уже не нужен в 6-й версии react-router
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route element={
            <HomePage />
          } />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
