import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { BgContext } from '../contexts/ContextHead';

type NavBarProps = {
  className?: string;
  setShowMenu?: (show: boolean) => void;
};

const NavBar = ({ className, setShowMenu }: NavBarProps) => {
  const [showBar1, setShowBar1] = useState<boolean>(false);
  const bgContext = useContext(BgContext);

  if (bgContext === undefined) {
    return null;
  }
  const { bgColor } = bgContext;
    const handleNavLinkClick = () => {
      if (setShowMenu) setShowMenu(false);
    };
  return (
    <nav
      className={`flex gap-4  font-medium px-12 py-4 text-base ${className} z-50`}
    >
      <NavLink
        to='/'
        className={({ isActive }) =>
          ` ${
            isActive && !showBar1
              ? 'text-red-color'
              : 'text-black-color hover:text-red-color'
          } `
        }
        onMouseEnter={() => setShowBar1(false)}
        onClick={handleNavLinkClick}
      >
        Home
      </NavLink>
      <NavLink
        to='/shop'
        className={({ isActive }) =>
          ` ${
            isActive && !showBar1
              ? 'text-red-color'
              : 'text-black-color hover:text-red-color'
          } `
        }
        onMouseEnter={() => setShowBar1(false)}
        onClick={handleNavLinkClick}
      >
        Shop
      </NavLink>
      {bgColor !== undefined ? (
        <div className='flex flex-col  gap-1  cursor-pointer'>
          <div
            className='flex items-center gap-1'
            onClick={() => setShowBar1(!showBar1)}
          >
            Pages {showBar1 ? <FiChevronUp /> : <FiChevronDown />}
          </div>

          {showBar1 && (
            <ul className='py-6 flex flex-col items-start gap-2 px-10 text-md '>
              <li
                key='about'
                onClick={handleNavLinkClick}
              >
                <NavLink to='/about'>About</NavLink>
              </li>
              <li
                key='team'
                onClick={handleNavLinkClick}
              >
                <NavLink
                  to='/team'
                  onClick={handleNavLinkClick}
                >
                  Team
                </NavLink>
              </li>
              <li
                key='pricing'
                onClick={handleNavLinkClick}
              >
                <NavLink to='/pricing'>Pricing</NavLink>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <div className='flex items-center gap-1 relative cursor-pointer'>
          <NavLink
            to=''
            className={` ${
              showBar1 ? 'text-red-color' : 'text-black-color'
            } flex items-center gap-x-2 `}
            onMouseEnter={() => setShowBar1(true)}
          >
            Pages {showBar1 ? <FiChevronUp /> : <FiChevronDown />}
          </NavLink>
          {showBar1 && (
            <ul
              className={`py-6 flex flex-col items-start gap-4 px-8 text-md absolute w-[210px] h-auto bg-light-second-color shadow rounded top-10 ${
                className === 'flex-col' ? '' : ''
              }`}
              onMouseLeave={() => setShowBar1(false)}
              onMouseEnter={() => setShowBar1(true)}
            >
              <li>
                <NavLink
                  to='/about'
                  className={({ isActive }) =>
                    ` ${
                      isActive
                        ? 'text-red-color'
                        : 'text-black-color hover:text-red-color'
                    } `
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/team'
                  className={({ isActive }) =>
                    ` ${
                      isActive
                        ? 'text-red-color'
                        : 'text-black-color hover:text-red-color'
                    } `
                  }
                >
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/pricing'
                  className={({ isActive }) =>
                    ` ${
                      isActive
                        ? 'text-red-color'
                        : 'text-black-color hover:text-red-color'
                    } `
                  }
                >
                  Pricing
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      )}

      <NavLink
        to='/contact'
        className={({ isActive }) =>
          ` ${
            isActive && !showBar1
              ? 'text-red-color'
              : 'text-black-color hover:text-red-color'
          } `
        }
        onMouseEnter={() => setShowBar1(false)}
        onClick={handleNavLinkClick}
      >
        Contact
      </NavLink>
      <NavLink
        to='/service-quote'
        className={({ isActive }) =>
          ` ${
            isActive && !showBar1
              ? 'text-red-color'
              : 'text-black-color hover:text-red-color'
          } `
        }
        onMouseEnter={() => setShowBar1(false)}
        onClick={handleNavLinkClick}
      >
        Service Quote
      </NavLink>
    </nav>
  );
};

export default NavBar;
