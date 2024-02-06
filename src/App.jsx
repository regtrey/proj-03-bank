import GlobalStyles from './GlobalStyles';
import { Route, Routes } from 'react-router-dom';

import Layout from './ui/Layout';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route index path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
