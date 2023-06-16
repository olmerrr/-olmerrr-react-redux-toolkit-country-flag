import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import {useSelector} from "react-redux";
import {selectIndexPage} from "./features/controls/controls-selectors";
function App() {
  const indexPath = useSelector(selectIndexPage);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
              path={indexPath}
              element={
                 <HomePage />}
          />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
