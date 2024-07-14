import ReactDOM from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import LayoutShop from './Layout/LayoutShop';
import Home from './pages/home/Home';
import PageOneShop from './pages/shop/PageOneShop';
import PageTwoShop from './pages/shop/PageTwoShop';
import PageFourShop from './pages/shop/PageFourShop';
import PageThreeShop from './pages/shop/PageThreeShop';
import Contact from './pages/contact/Contact';
import ServiceQuote from './pages/service/ServiceQuote';
import About from './pages/about/About';
import Pricing from './pages/pracing/Pricing';
import Team from './pages/team/Team';
import { store } from './store/store';
import { Provider } from 'react-redux';

import Description from './pages/Product/Description';
import Reviews from './pages/Product/Reviews';
import LayoutProduct from './Layout/LayoutProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      {
        path: '/shop',
        element: <LayoutShop />,
        children: [
          { path: '', element: <PageOneShop /> },
          {
            path: 'Page/2',
            element: <PageTwoShop />,
          },
          {
            path: 'Page/3',
            element: <PageThreeShop />,
          },
          {
            path: 'Page/4',
            element: <PageFourShop />,
          },
        ],
      },
      { path: '/contact', element: <Contact /> },
      { path: '/service-quote', element: <ServiceQuote /> },
      { path: '/about', element: <About /> },
      { path: '/pricing', element: <Pricing /> },
      { path: '/team', element: <Team /> },
      {
        path: '/product/:title',
        element: <LayoutProduct />,
        children: [
          {
            path: '/product/:title/reviews',
            element: <Reviews />,
          },
          { path: '/product/:title/description', element: <Description /> },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
