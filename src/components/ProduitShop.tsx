import { AiTwotoneCloseCircle } from 'react-icons/ai';
import { ProductProps } from '../data/Proudct.ts';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../store/produitSlice.ts';

type ProduitShopProps = {
  products: { product: ProductProps; quantity: number };
  handleClose: () => void;
  handleClick: () => void;
};
const ProduitShop = ({
  products,
  handleClose,
  handleClick,
}: ProduitShopProps) => {
  const dispatch = useDispatch();
  return (
    <div className='flex  flex-col p-2 gap-5 '>
      <div className='flex gap-6'>
        <Link
          to={`/product/${products}`}
          onClick={() => {
            handleClose();
            handleClick();
          }}
        >
          <img
            src={products.product.imgUrl}
            alt=''
            className='w-[100px] h-[72px] object-cover'
          />
        </Link>
        <div className='flex flex-col  justify-between w-full'>
          <h3 className='text-[18px] font-medium'>
            <strong>{products.product.title}</strong>
          </h3>
          <div className='flex w-full items-center justify-between'>
            <div className='text-gray-600'>
              <span>{products.quantity} x </span>
              <span>${products.product.priceAfter}</span>{' '}
            </div>
            <AiTwotoneCloseCircle
              className='text-[24px]'
             
              onClick={() =>
                dispatch(removeProduct({ productId: products.product.id }))
              }
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProduitShop;
