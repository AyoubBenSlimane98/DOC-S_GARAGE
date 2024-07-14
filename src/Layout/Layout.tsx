import Header from '../pages/Header/Header';
import Footer from '../pages/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { darkModeVideo ,LightModeCard} from '../contexts/ContextHead.ts';
import '../pages/home/Home.css';
import { useState } from 'react';
const Layout = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [lightMode, setLightMode] = useState<boolean>(false);

  return (
    <darkModeVideo.Provider value={{ darkMode, setDarkMode }}>
      <LightModeCard.Provider value={{ lightMode, setLightMode }}>
        <div className='relative'>
          {darkMode && <div className='section-video-dark z-[200]'></div>}
          {lightMode && <div className='section-card-light z-[200]'></div>}
          <Header />
          <Outlet />
          <Footer />
        </div>
      </LightModeCard.Provider>
    </darkModeVideo.Provider>
  );
};

export default Layout;
