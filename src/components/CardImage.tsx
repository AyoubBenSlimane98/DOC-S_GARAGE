import { ElementType } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

interface CardImageProps {
  img: string;
  title: string;
  subTitle: string;
  Icon: ElementType;
}

const CardImage = ({ img, title, subTitle, Icon }: CardImageProps) => {
  return (
    <div className='relative flex  justify-start  md:justify-center  items-end group overflow-hidden'>
      <img
        src={img}
        alt=''
        className='w-full h-[370px] lg:h-[550px] object-cover ease-in-out transform transition-transform duration-1000 group-hover:scale-110'
      />
      <div className='text-light-second-color duration-200 ease-in-out absolute py-12 px-8 md:px-0  flex  flex-col gap-y-3 items-center opacity-0 group-hover:opacity-100'>
        <Icon className='text-red-color text-[2.4rem] font-bold' />
        <div className='text-center'>
          <h5 className='text-xl md:text-3xl py-1'> {title}</h5>
          <p> {subTitle} </p>
        </div>
        <button className='w-16 h-auto border-none outline-none bg-red-color px-6 py-2 flex items-center justify-center'>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default CardImage;
