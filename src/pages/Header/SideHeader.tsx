import { useContext, useState } from 'react';
import logo from '../../assets/logo.webp';
import { FaPhoneAlt, FaMap } from 'react-icons/fa';
import SideDetail from '../../components/SideDetail';
import { LuMenu } from 'react-icons/lu';
import { RiCloseLargeLine } from 'react-icons/ri';
import NavBar from '../../components/NavBar';
import { BgContext } from '../../contexts/ContextHead';

const SideHeader = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const bgContext = useContext(BgContext);
  if (bgContext === undefined) {
    return null;
  }
  
  const { setBgColor } = bgContext;
  return (
    <>
      <section className=' hidden md:flex justify-between items-center py-6 px-6  duration-200 relative'>
        <div className='hidden lg:flex'>
          <NavBar />
        </div>
        <div className='lg:hidden '>
          <div
            className='w-10 h-10 bg-red-color flex items-center justify-center outline-none border-none duration-200'
            onClick={() => {
              setShowMenu(!showMenu);
              if (!showMenu) {
                setBgColor('bg-light-color');
              } else {
                setBgColor('');
              }
            }}
          >
            {showMenu ? (
              <RiCloseLargeLine
                className='text-3xl '
                style={{ color: 'white' }}
              />
            ) : (
              <LuMenu
                className='text-3xl '
                style={{ color: 'white' }}
              />
            )}
          </div>
        </div>
        <section className=' flex items-center gap-8 '>
          <SideDetail
            Icon={FaPhoneAlt}
            title='1-777-400-9821'
            about='Call us'
          />
          <SideDetail
            Icon={FaMap}
            title='8305 Arch Ave.Chaska'
            about='San Francisco, SF 55318'
          />
        </section>
      </section>

      <section className='flex items-center justify-between md:hidden gap-10 py-6 px-6 w-full '>
        <img
          src={logo}
          alt=''
          className='w-60 h-auto'
        />
        <div
          className='w-10 h-10 bg-red-color flex items-center justify-center outline-none border-none duration-200'
          onClick={() => {
            setShowMenu(!showMenu);
            if (!showMenu) {
              setBgColor('bg-light-color');
            } else {
              setBgColor('');
            }
          }}
        >
          {' '}
          {showMenu ? (
            <RiCloseLargeLine
              className='text-3xl '
              style={{ color: 'white' }}
            />
          ) : (
            <LuMenu
              className='text-3xl '
              style={{ color: 'white' }}
            />
          )}
        </div>
      </section>
      {showMenu && (
        <NavBar
          className='flex-col bg-white-color  '
          setShowMenu={setShowMenu}
        />
      )}
    </>
  );
};

export default SideHeader;
