import Divider from './Divider';
import car from '../assets/car.webp';
import man from '../assets/man-1.webp';
import { IoIosCheckmark } from 'react-icons/io';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

const ServiceUse = () => {
  return (
    <section className='flex flex-col px-6  lg:grid  lg:grid-cols-[repeat(2,1fr)] gap-16 py-6 md:py-6 md:mt-10 lg:mb-12 lg:py-20 lg:gap-x-20 '>
      <div className='mb-6 md:mb-0 relative flex justify-end '>
        <img
          src={car}
          alt=''
          className='absolute w-[260px]  -bottom-[74px] -left-0   object-cover h-auto sm:w-[360px] sm:-bottom-[60px]  sm:left-[40px]  md:-bottom-[40px]  md:left-[10px]  md:w-[500px] lg:h-[460px] lg:w-[300px] lg:-bottom-[100px] lg:left-0'
         
        />
        <img
          src={man}
          alt=''
          className='w-[280px] sm:w-[380px] md:w-[540px] lg:w-[400px] h-auto object-cover ml-12  '
        />
      </div>
      <div className='flex flex-col items-center justify-center md:justify-normal md:items-start gap-6 md:gap-8 py-4'>
        <motion.div
          className='text-[2.4rem] md:text-[3rem] text-center md:text-start '
          variants={fadeIn({ direction: 'right', delay: 0.25, value: 175 })}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0 }}
        >
          <span className=''>Docs Garage offers</span>
          <span className='text-red-color px-2'>top-quality auto repair</span>
          <span>and maintenance services</span>
        </motion.div>
        <Divider props='bg-red-color' />
        <motion.div
          className='flex flex-col items-center md:items-stretch md:justify-between  gap-6 md:gap-10'
          variants={fadeIn({ direction: 'up', delay: 0.25, value: 75 })}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0 }}
        >
          <p className='text-justify text-text-color md:font-extralight  md:leading-loose'>
            But in truth we both accuse those who are deserving of just hatred,
            who have been softened by
            <strong className='px-2 text-black'>
              the flattery of present pleasures
            </strong>
            , and who have been corrupted by what pains and what troubles they
            are about to undergo.
          </p>
          <div className='flex flex-col items-center md:items-stretch  gap-1  md:w-2/3  md:flex-row justify-between '>
            <ul className='flex-shrink-0 flex flex-col  '>
              <li className=' inline-flex items-center'>
                <IoIosCheckmark className='text-red-color text-3xl' />
                Curabitur blandit
              </li>
              <li className=' inline-flex items-center'>
                <IoIosCheckmark className='text-red-color text-3xl' />
                Tempus porttitor
              </li>
              <li className=' inline-flex items-center'>
                <IoIosCheckmark className='text-red-color text-3xl' />
                Lorem Ipsum
              </li>
              <li className=' inline-flex items-center md:text-nowrap'>
                <IoIosCheckmark className='text-red-color text-3xl' />
                Dolor sit amet
              </li>
            </ul>
            <ul className=' flex-shrink-0 flex flex-col  '>
              <li className=' inline-flex items-center'>
                <IoIosCheckmark className='text-red-color text-3xl' />
                Dolor sit
              </li>
              <li className=' inline-flex items-center'>
                <IoIosCheckmark className='text-red-color text-3xl' />
                Curabitur blandit
              </li>
              <li className=' inline-flex items-center'>
                <IoIosCheckmark className='text-red-color text-3xl' />
                Lorem ipsum
              </li>
              <li className=' inline-flex items-center'>
                <IoIosCheckmark className='text-red-color text-3xl' />
                Tempus porttitor
              </li>
            </ul>
          </div>
          <button className='border-none outline-none bg-red-color text-light-second-color py-1.5 w-44  font-extralight'>
            LEARN MORE
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceUse;
