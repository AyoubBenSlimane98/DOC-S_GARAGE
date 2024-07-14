import HeaderShop from '../pages/Header/HeaderShop';
import FooterShop from '../pages/Footer/FooterShop';
import { Outlet } from 'react-router-dom';
import { getNumberPage } from '../contexts/ContextHead.ts';
import { useState } from 'react';
const LayoutShop = () => {
  const [page, setPage] = useState<number>(1);
  return (
    <getNumberPage.Provider value={{ page, setPage }}>
      <HeaderShop />
      <Outlet />
      <FooterShop />
    </getNumberPage.Provider>
  );
};

export default LayoutShop;
