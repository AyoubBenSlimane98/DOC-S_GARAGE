import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { getNumberPage } from '../../contexts/ContextHead';
const HeaderShop = () => {
  const pages = useContext(getNumberPage);
  if (!pages) return null;
  const { page, setPage } = pages;
  console.log(page);
  return (
    <header className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between px-12'>
      <nav className=' font-extralight text-gray-text-second'>
        {page >= 1 && (
          <>
            <NavLink to='/'>Home</NavLink>
            <NavLink
              to='/shop'
              className='hover:cursor-pointer'
              onClick={() => setPage(1)}
            >
              <span className='px-1'>/</span>
              Products
            </NavLink>
          </>
        )}
        {page >= 2 && (
          <NavLink
            to='/shop/Page/2'
            className='hover:cursor-pointer'
            onClick={() => setPage(2)}
          >
            <span className='px-1'>/</span>
            Page 2
          </NavLink>
        )}
        {page >= 3 && (
          <NavLink
            to='/shop/Page/3'
            className='hover:cursor-pointer'
            onClick={() => setPage(3)}
          >
            <span className='px-1'>/</span>
            Page 3
          </NavLink>
        )}
        {page >= 4 && (
          <NavLink
            to='/shop/Page/4'
            className='hover:cursor-pointer'
            onClick={() => setPage(4)}
          >
            <span className='px-1'>/</span>
            Page 4
          </NavLink>
        )}
      </nav>
      <div className='flex justify-end py-2 sm:py-0 sm:justify-normal'>
        <select
          name='sort'
          className=' border border-gray-400 px-3 py-1.5 outline-none rounded-sm '
          defaultValue='Default sorting'
        >
          <option value='Default sorting'>Default sorting</option>
          <option value='Sort by price: low to high'>
            Sort by price: low to high
          </option>
          <option value='Sort by price: high to low '>
            Sort by price: high to low
          </option>
        </select>
      </div>
    </header>
  );
};

export default HeaderShop;
