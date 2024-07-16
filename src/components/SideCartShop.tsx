 import { motion } from 'framer-motion';
 import { fadeIn } from '../components/variants.ts';
import { ProductProps } from '../data/Proudct.ts';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../store/produitSlice.ts';


type ProduitShopProps = {
  products: { product: ProductProps; quantity: number };
  handleClose: () => void;
  handleClick: () => void;
};

const SideCartShop = ({
  products,
  handleClose,
  handleClick,
}: ProduitShopProps) => {
  const dispatch = useDispatch();
  
  return (
    <motion.div
      className='flex flex-col  py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0 border-b border-gray-300'
      variants={fadeIn({ direction: 'up', delay: 0.25, value: 20 })}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true, amount: 0 }}
    >
      <NavLink
        className='shrink-0 relative'
        to={`/product/${products.product.title}`}
        onClick={() => {
          handleClose();
          handleClick();
        }}
      >
        <span className='absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2'>
          {products.quantity}
        </span>
        <img
          className='h-24 w-24 max-w-full rounded-lg object-cover'
          src={products.product.imgUrl}
          alt=''
        />
      </NavLink>
      <div className='relative flex flex-1 flex-col justify-between'>
        <div className='sm:col-gap-5 sm:grid sm:grid-cols-2'>
          <div className='pr-8 sm:pr-5'>
            <p className='text-base font-semibold text-gray-900'>
              {products.product.title}
            </p>
            <p className='mx-0 mt-1 mb-0 text-sm text-gray-400'>36EU - 4US</p>
          </div>

          <div className='mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end'>
            <p className='shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right'>
              ${products.product.priceAfter}
            </p>
          </div>
        </div>

        <div className='absolute top-0 right-0 flex sm:bottom-0 sm:top-auto'>
          <button
            type='button'
            className='flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900'
            onClick={() =>
              dispatch(removeProduct({ productId: products.product.id }))
            }
          >
            <svg
              className='h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M6 18L18 6M6 6l12 12'
                className=''
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SideCartShop;
