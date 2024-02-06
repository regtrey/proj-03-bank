import GlobalStyles from './GlobalStyles';
import { Route, Routes } from 'react-router-dom';

import Layout from './ui/Layout';
import PageNotFound from './ui/PageNotFound';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route index path="/" element={<Layout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
