import { useContext, useState, useEffect } from 'react';
import logo from '../../assets/logo.webp';
import { SiShopify } from 'react-icons/si';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa6';
import SideHeader from './SideHeader';
import Button from '../../components/Button';
import { BgContext, LightModeCard } from '../../contexts/ContextHead';
import { IoMdClose } from 'react-icons/io';

import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

import SideCartShop from '../../components/SideCartShop';
const Header = () => {
  const counter = useSelector((state: RootState) => state.products.counter);
  const priceTotal = useSelector(
    (state: RootState) => state.products.priceTotal
  );
  const allProducts = useSelector(
    (state: RootState) => state.products.products
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string | undefined>(undefined);

  const lightModes = useContext(LightModeCard);
  if (lightModes === undefined) return null;
  const { lightMode, setLightMode } = lightModes;
  const handleMouseEnter = () => {
    setLightMode(!lightMode);
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    setLightMode(!lightMode);
  };
  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setLightMode(false);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <BgContext.Provider value={{ bgColor, setBgColor }}>
      <header className={`flex flex-col ${bgColor}  duration-200 relative`}>
        <section className='hidden md:flex md:justify-between lg:justify-between  items-center gap:4 md:gap-12 py-6  px-6  '>
          <div className=' flex-shrink-0'>
            <img
              src={logo}
              alt=''
              className='w-48  object-contain'
            />
          </div>
          <form
            className={`lg:flex-grow md:max-w-[600px] md:flex-shrink flex items-center `}
          >
            <input
              type='search'
              placeholder='search...'
              className='w-full outline-none border border-gray-400 border-r-0 px-4 py-1'
            />
            <button
              type='submit'
              className='border border-red-color bg-red-color text-white-color py-1 px-2'
            >
              GO
            </button>
          </form>
          <div
            className={`flex items-center gap-10 ${
              isOpen ? 'flex-shrink' : ''
            }`}
          >
            {isOpen && (
              <div className='w-[240px] md:w-[310px] lg:w-[330px] xl:w-[360px] h-screen fixed bg-light-second-color z-[3000] right-0 top-0 flex flex-col gap-y-6 ease-in-out duration-1000'>
                <div className='w-full py-2 px-3   flex justify-end items-center'>
                  <IoMdClose
                    className='text-[1.6rem] text-gray-text-second'
                    onClick={() => {
                      handleClose();
                      handleClick();
                    }}
                  />
                </div>
                <div className='flex flex-col gap-4 px-4 '>
                  {counter === 0 ? (
                    <div className='px-1 text-gray-600 font-extralight'>
                      No products in cart.
                    </div>
                  ) : (
                    <div className=''>
                      <div className=''>
                        {allProducts.map((products, index) => (
                          <SideCartShop
                            key={index}
                            products={products}
                            handleClose={handleClose}
                            handleClick={handleClick}
                          />
                        ))}
                      </div>
                      <div className='mt-6 flex items-center justify-between'>
                        <p className='text-sm font-medium text-gray-900'>
                          Total
                        </p>
                        <p className='text-2xl font-semibold text-gray-900'>
                          <span className='text-xs font-normal text-gray-400'>
                            USD
                          </span>{' '}
                          {priceTotal}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div
              className='flex items-center gap-2'
              onMouseEnter={handleMouseEnter}
              onClick={handleClick}
            >
              <div className='flex relative'>
                <SiShopify className='w-6 h-6' />
                <span className='w-4 h-4 text-[10px] rounded-full bg-red-color flex items-center justify-center text-white-color absolute -top-2 -right-2'>
                  {counter}
                </span>
              </div>
              <div>${priceTotal}</div>
            </div>
            <div className='flex items-center gap-2 '>
              <Button Icon={FaFacebook} />
              <Button Icon={FaInstagram} />
              <Button Icon={FaYoutube} />
              <Button Icon={FaTwitter} />
            </div>
          </div>
        </section>
        <hr className=' ' />
        <SideHeader />
      </header>
    </BgContext.Provider>
  );
};

export default Header;
