import { NavLink , useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { getNumberPage } from '../../contexts/ContextHead';
const FooterShop = () => {
  const navigation = useNavigate(); 
  const pages = useContext(getNumberPage);
  if (pages === null) return null;
  const { page, setPage } = pages;
  return (
    <footer className='w-full flex justify-center'>
      <ul className='flex border min-w-fit '>
        <li
          className={`px-3 border-r text-center cursor-pointer ${
            page === 1
              ? 'bg-gray-300 text-red-color'
              : 'bg-white text-black-color'
          }`}
          onClick={() => {
            setPage(1);
            navigation('/shop');
          }}
        >
          <NavLink to='/shop'>1</NavLink>
        </li>

        <li
          className={`px-3 border-r text-center cursor-pointer ${
            page === 2
              ? 'bg-gray-300 text-red-color'
              : 'bg-white text-black-color'
          }`}
          onClick={() => {
            setPage(2);
            navigation('/shop/Page/2');
          }}
        >
          <NavLink to='/shop/Page/2'>2</NavLink>
        </li>
        <li
          className={`px-3 border-r text-center cursor-pointer ${
            page === 3
              ? 'bg-gray-300 text-red-color'
              : 'bg-white text-black-color'
          }`}
          onClick={() => {
            setPage(3);
            navigation('/shop/Page/3');
          }}
        >
          <NavLink to='/shop/Page/3'>3</NavLink>
        </li>
        <li
          className={`px-3 border-r text-center cursor-pointer ${
            page === 4
              ? 'bg-gray-300 text-red-color'
              : 'bg-white text-black-color'
          }`}
          onClick={() => {
            setPage(4);
            navigation('/shop/Page/4');
          }}
        >
          <NavLink to='/shop/Page/4'>4</NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default FooterShop;
