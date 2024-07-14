import { motion } from 'framer-motion';
import { fadeIn } from '../components/variants';
type ImagePageProps = {
  title: string;
  image: string;
};
const ImagePage = ({ title, image }: ImagePageProps) => {
  return (
    <div className=' relative  w-full bg-black  h-[238px]    md:h-[302px]  lg:h-[492px]'>
      <div className=' relative'>
        <img
          src={image}
          alt=''
          className='w-full  object-cover bg-top   h-[238px]    md:h-[302px]  lg:h-[492px]'
        />
        <div className='section-image'></div>
      </div>
      <motion.div
        className='absolute  flex items-center justify-center top-1 right-1 left-1   h-[238px]    md:h-[302px]  lg:h-[492px]'
        variants={fadeIn({ direction: 'right', delay: 0.25, value: -100 })}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0 }}
      >
        <h5 className='text-[3rem] sm:text-[3.4rem] md:text-[3.8rem] lg:text-[5rem] text-white-color font'>
          {title}
        </h5>
      </motion.div>
    </div>
  );
};

export default ImagePage;
