import {logos} from '../data/Proudct'

const ImageScroll = ({image} :logos) => {
    return (
      <div className='flex items-center justify-center gap-4 p-6 w-[112px] h-[112px] bg-global overflow-hidden'>
        <img
          src={image}
          alt=''
          className=' object-cover'
        />
      </div>
    );
};

export default ImageScroll;
