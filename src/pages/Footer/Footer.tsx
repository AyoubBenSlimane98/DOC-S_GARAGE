import FooterBar from '../../components/FooterBar';
import logo from '../../assets/logo.webp';
import { NavLink } from 'react-router-dom';
const Services = [
  'Finance consulting',
  'Purpose & values',
  'Talent & capabilities',
  'Pellentesque Etiam',
  'Mollis Aenean',
  'Nullam Condimentum',
];

const Solutions = [
  'Payment solution',
  'Digital solution',
  'F&B Point of sale',
  'Management solution',
  'Mollis Aenean',
  'Nullam Condimentum',
];

const Industries = [
  'Hotel',
  'Leisure',
  'Education',
  'Food & beverages',
  'Store',
  'Enterprise Company',
];

const Company = [
  'Our Team',
  'News',
  'Location',
  'Pharetra Parturient',
  'Mollis Aenean',
  'Nullam Condimentum',
];

const Footer = () => {
  return (
    <footer className='flex flex-col gap-y-6 px-12 py-6'>
      <div className=' flex flex-col text-center items-center md:flex-row  justify-between gap-4 '>
        <FooterBar
          data={Services}
          title='Services'
        />
        <FooterBar
          data={Solutions}
          title='Solutions'
        />
        <FooterBar
          data={Industries}
          title='Industries'
        />
        <FooterBar
          data={Company}
          title='Company'
        />
      </div>

      <div className=' flex  flex-col-reverse  gap-6 md:flex-row md:justify-between py-8 '>
        <div className='flex flex-col md:flex-row   items-center gap-4  '>
          <h5 className=' text-black-color text-[1.1125rem]  font-semibold'>
            Follow us
          </h5>
          <ul className='flex items-center gap-4 text-gray-500 font-extralight cursor-pointer'>
            <li className='hover:text-red-color'>Facebook</li>
            <li className='hover:text-red-color'>Twitter</li>
            <li className='hover:text-red-color'>LinkedIn</li>
            <li className='hover:text-red-color'>Youtube</li>
          </ul>
        </div>
        <div className='flex flex-col md:flex-row md:items-center gap-6'>
          <h5 className=' text-black-color text-[1.1125rem]  font-semibold  text-center'>
            Stay in touch
          </h5>
          <form className=' flex flex-col md:flex-row gap-2 md:gap-0 md:items-center flex-grow '>
            <input
              type='email'
              placeholder='Email'
              className=' border border-gray-400 outline-none py-1 px-4  md:border-r-0 w-full'
            />
            <button
              type='submit'
              className=' border border-gray-400 outline-none py-1 px-4 bg-red-color text-white-color '
            >
              SEND
            </button>
          </form>
        </div>
      </div>

      <div>
        <div className=' relative flex flex-col items-center '>
          <img
            src={logo}
            alt=''
            className='w-48 z-10'
          />
          <hr className='w-full absolute top-6' />
        </div>
      </div>
      <div className='flex flex-col-reverse items-center gap-4 md:flex-row  md:justify-between'>
        <p className='text-gray-600 font-extralight'>
          Copyright © {new Date().getFullYear()} All rights reserved.
        </p>
        <ul className='flex  items-center gap-10 md:gap-4  font-light text-gray-600'>
          <li className='hover:text-red-color duration-200'>
            <NavLink to='/'>Terms of Serice</NavLink>{' '}
          </li>
          <li className='hover:text-red-color duration-200'>
            <NavLink to='/'>Privacy Policy</NavLink>{' '}
          </li>
          <li className='hover:text-red-color duration-200'>
            <NavLink to='/'>Career</NavLink>{' '}
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
