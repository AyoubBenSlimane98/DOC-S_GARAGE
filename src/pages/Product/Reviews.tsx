import { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { products, ProductProps } from '../../data/Proudct.ts';

function Reviews() {
  const prams = useParams();
  const [product, setProduct] = useState<ProductProps | null>(null);
  useEffect(() => {
    const index = products.findIndex(
      (product) => product.title === prams.title
    );
    if (index !== -1) {
      setProduct(products[index]);
    }
  }, [prams.title]);
  const [star, setStar] = useState<number>(0);
  const handleStarClick = (index: number) => {
    setStar(index);
  };
  const handleStarDoubleClick = () => {
    if (star === 1) {
      setStar(0);
    }
    setStar(star - 1);
  };
  return (
    <div className='container mx-auto p-6'>
      <h3 className='text-[2rem] font-semibold pb-4'>Reviews</h3>
      <div className='font-light pb-4 text-[16px] text-gray-600'>
        <span>There are no reviews yet.</span>
      </div>
      <div className='font-light pb-4 text-[16px] text-gray-600'>
        <span>Be the first to review {product?.title}</span>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <form className='flex flex-col gap-4'>
        <label htmlFor=''>
          <div>
            <div className='text-[14px] py-2'>
              <span>YOUR RATING </span> <span className='text-red-600'>*</span>
            </div>
            <div className='flex gap-1'>
              {[1, 2, 3, 4, 5].map((index) => (
                <span
                  key={index}
                  onClick={() => handleStarClick(index)}
                  onDoubleClick={handleStarDoubleClick}
                >
                  {star >= index ? (
                    <FaStar className='text-red-600 text-[16px]' />
                  ) : (
                    <FaRegStar className='text-red-600 text-[16px]' />
                  )}
                </span>
              ))}
            </div>
          </div>
        </label>
        <label
          htmlFor=''
          className='flex flex-col'
        >
          <div className='text-[14px] py-2'>
            <span>YOUR REVIEW </span>{' '}
            <span className='text-red-600 text-[16px]'>*</span>
          </div>
          <textarea
            name=''
            className='border border-gray-400 outline-none w-full h-24 px-4 py-2'
          ></textarea>
        </label>
        <label
          htmlFor=''
          className='flex flex-col'
        >
          <div className='text-[14px] py-2'>
            <span>NAME </span>
            <span className='text-red-600'>*</span>
          </div>
          <input
            type='text'
            className='border border-gray-400 outline-none py-1.5 px-4'
          />
        </label>
        <label
          htmlFor=''
          className='flex flex-col'
        >
          <div className='text-[14px] py-2'>
            <span>EMAIL </span>
            <span className='text-red-600'>*</span>
          </div>
          <input
            type='Email'
            className='border border-gray-400 outline-none py-1.5 px-4'
          />
        </label>
        <div className='flex gap-2 py-2'>
          <input type='checkbox' />
          <span className='font-light text-[14px]'>
            SAVE MY NAME, EMAIL, AND WEBSITE IN THIS BROWSER FOR THE NEXT TIME I
            COMMENT.
          </span>
        </div>
        <div>
          <button
            type='button'
            className='border-none outline-none px-8 py-1.5 bg-red-color w-44 text-white text-[15px] hover:bg-red-700 duration-200'
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default Reviews;
