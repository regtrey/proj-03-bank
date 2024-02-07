import GlobalStyles from './GlobalStyles';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './ui/Layout';
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';
import Loan from './pages/Loan';
import Transactions from './pages/Transactions';
import PageNotFound from './ui/PageNotFound';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="loan" element={<Loan />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
