import logo from '../assets/man-1.webp';

const CommantArt = () => {
  return (
    <div className='flex flex-col w-full  gap-7 p-4'>
      <p className='text-[1.125rem] font-extralight leading-relaxed text-balance text-gray-text-second'>
        &ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo &ldquo;
      </p>
      <div className='flex items-center gap-5'>
        <img
          src={logo}
          alt=''
          className='w-[60px] h-[60px] object-cover rounded-full origin-center'
        />
        <div className=''>
          <h5 className='text-[1.25rem] font-semibold'>
            Ayyoub benslimane
          </h5>
          <p className='text-red-color text-[14px] font-light'>
            MANAGMET OF GOSHT{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommantArt;
