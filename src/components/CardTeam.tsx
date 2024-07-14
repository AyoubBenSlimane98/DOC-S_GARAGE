
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa6';
type CardTeamProps = {
  title: string;
    image: string;
  
};
const CardTeam = ({ title, image }:CardTeamProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <img
        src={image}
        alt=''
        className=' sm:min-w-[425px] sm:max-w-[691px] sm:min-h-[691px] sm:max-h-[1012.0.3px] md:min-w-[316.5px] md:max-w-[444px] md:min-h-[463.5px] md:max-h-[650.5px]  lg:min-w-[415px] lg:max-w-[480px] lg:min-h-[608.58px] lg:max-h-[703px] object-cover transform ease-in-out duration-700  translate-y-0 hover:-translate-y-[20px] '
      />
      <div className='flex flex-col gap-3 sm:min-w-[425px] s:max-w-[691px]     md:min-w-[316.5px] md:max-w-[444px]   lg:min-w-[415px] lg:max-w-[480px] '>
        <div className=' border-b border-gray-400 py-4 flex  flex-col  justify-between items-center gap-1 md:flex-row'>
          <h3 className='text-[1.6rem] md:text-[1.4rem] font-bold'>
            {' '}
            {title}{' '}
          </h3>
          <span className='text-red-600 text-[15px] '>CO-FOUNDER</span>
        </div>
        <p className='text-md text-wrap font-extralight  leading-relaxed text-gray-700 '>
          Sed posuere consectetur est at lobortis. Donec sed odio dui. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis
        </p>
        <div className='flex items-center justify-center md:justify-start  gap-4 py-4'>
          <div className='w-[40px] h-[40px] flex items-center justify-center border rounded-full border-red-700 hover:bg-red-600 group  ease-in-out duration-300'>
            <FaFacebook className='text-xl text-red-600  group-hover:text-white' />
          </div>
          <div className='w-[40px] h-[40px] flex items-center justify-center border rounded-full border-red-700 hover:bg-red-600 group  ease-in-out duration-300'>
            <FaTwitter className='text-xl text-red-600  group-hover:text-white' />
          </div>
          <div className='w-[40px] h-[40px] flex items-center justify-center border rounded-full border-red-700 hover:bg-red-600 group  ease-in-out duration-300'>
            <FaYoutube className='text-xl text-red-600  group-hover:text-white' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTeam;
