import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { products, ProductProps } from '../../data/Proudct';
import { addNewProduct } from '../../store/produitSlice';
import { useDispatch } from 'react-redux';

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [produit, setProduit] = useState<ProductProps | null>(null);
  
  const [total, setTotal] = useState(1);

  useEffect(() => {
    const product = products.find((product) => product.title === params.title);
    if (product) {
      setProduit(product);
    }
  }, [params.title]);

  const incrementCount = () => setTotal((prev) => prev + 1);
  const decrementCount = () => setTotal((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (produit) {
      dispatch(addNewProduct({ product: produit, quantity: total }));
    }
  };
  return (
    <main className='container mx-auto px-4 py-6 flex flex-col items-center justify-center gap-16'>
      <section className='flex flex-col gap-6 md:flex-row md:gap-16'>
        <img
          src={produit?.imgUrl}
          alt={produit?.title}
          className='w-[465px] h-[465px] sm:w-[500px] sm:h-[500px] md:min-w-[288px] md:max-w-[384px] md:min-h-[288px] md:max-h-[384px] lg:min-w-[384px] lg:max-w-[541px] lg:min-h-[384px] lg:max-h-[541px]'
        />
        <div className='flex flex-col  gap-4 md:gap-6'>
          <div className='font-bold'>
            <h5 className='text-[3rem] md:text-[3.6rem] lg:text-[4.4rem] '>
              {produit?.title}
            </h5>
          </div>
          <div className='font-thin'>
            <span className='text-[1.2rem] lg:text-[1.8rem] text-lime-600'>
              ${produit?.priceAfter}
            </span>
          </div>
          <div className='font-light py-2 lg:text-[1.2rem]'>
            <p>This is a simple, virtual product.</p>
          </div>
          <div>
            <div className='mx-auto flex h-8 items-stretch text-gray-600'>
              <button
                className='flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white'
                onClick={decrementCount}
              >
                -
              </button>
              <div className='flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition'>
                {total}
              </div>
              <button
                className='flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white'
                onClick={incrementCount}
              >
                +
              </button>
            </div>

            <div className='mt-8 text-center'>
              <button
                type='button'
                className='group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-2 text-md font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800'
                onClick={() => {
                  handleAddToCart();
                }}
              >
                ADD TO CART
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='group-hover:ml-8 ml-4 h-6 w-6 transition-all'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M13 7l5 5m0 0l-5 5m5-5H6'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='border-b border-gray-400 py-1 w-full flex'>
        <nav className='mx-4'>
          <NavLink
            to={`/product/${params.title}/description`}
            className={({ isActive }) => `
              ${
                isActive ? 'border-b-0 bg-white' : 'bg-stone-200 skew-y-2'
              } border border-gray-400 border-b-0 px-4 py-2 ease-in-out duration-200`}
          >
            Description
          </NavLink>
          <NavLink
            to={`/product/${params.title}/reviews`}
            className={({ isActive }) => `
              ${
                isActive
                  ? 'border-b-0 bg-white border-l-0'
                  : 'bg-stone-200 border-tl'
              } border border-gray-400 px-4 py-2 ease-in-out duration-200`}
          >
            Reviews <span>(0)</span>
          </NavLink>
        </nav>
      </section>
    </main>
  );
};

export default Product;
