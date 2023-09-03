import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from 'components/Header/Header';
import ScrollToTop from 'units/scrollToTop';
import { Container } from 'components/Container/Container.styled';

// page`s lazy loading
const HomePage = lazy(() => import('./pages/Home'));
const CartPage = lazy(() => import('./pages/Cart'));
const FullPizza = lazy(() => import('./pages/FullPizza'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Container>
      <ScrollToTop />

      <Header />

      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:id" element={<FullPizza />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default App;
