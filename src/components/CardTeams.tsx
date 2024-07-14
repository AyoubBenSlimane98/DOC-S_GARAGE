import { motion } from 'framer-motion';
import { fadeIn } from '../components/variants';
type CardTeamsProps = {
  title: string;
  image: string;
};
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa6';
const CardTeams = ({ title, image }: CardTeamsProps) => {
  return (
    <motion.div
      className='flex flex-col  lg:items-center lg:justify-center  h-auto  '
      variants={fadeIn({ direction: 'up', delay: 0.25, value: 75 })}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0 }}
    >
      <img
        src={image}
        alt=''
        className=' sm:min-w-[425px] sm:max-w-[691px] sm:min-h-[636.97px] sm:max-h-[1035.63px] md:min-w-[191.66px] md:max-w-[275.98px] md:min-h-[287.34px] md:max-h-[413.77px] lg:min-w-[257.33px] lg:max-w-[319.98px] lg:min-h-[385.8px] lg:max-h-[479.73px] transform ease-in-out  duration-300 hover:-translate-y-[10px] object-cover'
      />

      <div className='px-6 py-4 flex flex-col items-center justify-center md:items-start lg:justify-start lg:items-start  lg:w-full  '>
        <h3 className='text-[28px] md:text-[21px]  font-medium'>{title}</h3>
        <p className='md:text-[14px] text-gray-500 font-extralight pb-3 '>
          AUTO MECHANIC
        </p>
        <div className='flex items-center justify-center gap-3 pt-3 md:justify-start  md:gap-1.5 md:py-4 w-full'>
          <div className='w-[26px] h-[26px] flex items-center justify-center border rounded-full border-red-700 hover:bg-red-600 group  ease-in-out duration-300'>
            <FaFacebook className='text-[16px] text-red-600  group-hover:text-white' />
          </div>
          <div className='w-[26px] h-[26px] flex items-center justify-center border rounded-full border-red-700 hover:bg-red-600 group  ease-in-out duration-300'>
            <FaTwitter className='text-[16px] text-red-600  group-hover:text-white' />
          </div>
          <div className='w-[26px] h-[26px] flex items-center justify-center border rounded-full border-red-700 hover:bg-red-600 group  ease-in-out duration-300'>
            <FaYoutube className='text-[16px] text-red-600  group-hover:text-white' />
          </div>
          <div className='w-[26px] h-[26px] flex items-center justify-center border rounded-full border-red-700 hover:bg-red-600 group  ease-in-out duration-300'>
            <FaInstagram className='text-[16px] text-red-600  group-hover:text-white' />
          </div>
          <div className='w-[26px] h-[26px] flex items-center justify-center border rounded-full border-red-700 hover:bg-red-600 group  ease-in-out duration-300'>
            <FaTiktok className='text-[16px] text-red-600  group-hover:text-white' />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardTeams;
