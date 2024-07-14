import ImagePage from '../../components/ImagePage';
import about from '../../assets/about.webp';
import ServiceUse from '../../components/ServiceUse';
import SubTitles from '../../components/SubTitles';
import aboutph from '../../assets/about-ph.webp';
import { images } from '../../data/Proudct.ts';
import ImageScroll from '../../components/ImageScroll';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../components/variants';
const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const rotatedImages = [
    ...images.slice(currentIndex),
    ...images.slice(0, currentIndex),
  ];
  return (
    <div className='flex flex-col overflow-hidden '>
      <div className=' overflow-hidden'>
        <ImagePage {...{ title: 'About us', image: about }} />
      </div>
      <ServiceUse />
      <section className='bg-global grid md:grid-cols-2 gap-8'>
        <motion.div
          className='md:flex md:flex-col md:items-center md:justify-center'
          variants={fadeIn({ direction: 'up', delay: 0.25, value: 75 })}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0 }}
        >
          <SubTitles
            {...{
              titleleft: 'Award',
              subTitle: 'modification interior',
              titleright: '2019 - 2020',
              classMidal: 'text-red-color',
              classDiv: 'items-center gap-4',
              classTitle:
                'text-[1.9rem] md:text-[2.2rem] lg:text-[2.6rem] text-center px-4 py-4',
            }}
          >
            <p className='text-gray-600  font-light py-6 text-center px-6'>
              Nulla vitae elit libero{' '}
              <strong className='text-black'>pharetra augue</strong> Sed posuere
              consectetur est at lobortis.
            </p>
          </SubTitles>
        </motion.div>
        <div className=' grid md:grid-rows-2 p-2'>
          <div className=' border-b flex flex-col pb-8 gap-3 md:flex-row md:justify-between text-center md:py-12'>
            <h5 className='text-[2.4rem] md:px-3 '>2020</h5>
            <ul className='flex flex-col gap-2 '>
              <li> K-Design Award</li>
              <li>Chrysler Design Award</li>
              <li>Mainichi Design Prize</li>
            </ul>
            <ul className='flex flex-col gap-2 '>
              <li>K-Design Award</li>
              <li>Chrysler Design Award</li>
              <li>Mainichi Design Prize</li>
            </ul>
          </div>
          <div className='flex flex-col p-8 gap-3 md:flex-row md:justify-between text-center md:py-12'>
            <h5 className='text-[2.4rem] md:px-3 '>2019</h5>
            <ul className='flex flex-col gap-2 '>
              <li> K-Design Award</li>
              <li>Chrysler Design Award</li>
              <li>Mainichi Design Prize</li>
            </ul>
            <ul className='flex flex-col gap-2 '>
              <li>K-Design Award</li>
              <li>Chrysler Design Award</li>
              <li>Mainichi Design Prize</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 w-full lg:h-[600px] '>
        <div className='px-8   md:h-[600px] md:z-40 md:text-white-color lg:text-black '>
          <motion.div
            variants={fadeIn({ direction: 'left', delay: 0.25, value: 75 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
            <SubTitles
              {...{
                titleleft: 'Our',
                titleright: 'Locations',
                classright: 'text-red-color',
                classDiv: 'items-center py-8  md:items-start md:py-12',
                classTitle:
                  'text-[1.9rem] md:text-[2.6rem] lg:text-[3rem] text-center  py-4',
              }}
            />
          </motion.div>

          <motion.ul
            className='py-6 flex flex-col gap-4 px-2'
            variants={fadeIn({ direction: 'up', delay: 0.25, value: 75 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
            <li className='flex items-center gap-2'>
              <span className='w-3 h-3 bg-red-color text-red-color mr-3'></span>
              <div className='flex flex-col gap-1'>
                <span> 1428 Callison Lane Building 201 Virginia,</span>{' '}
                <span>VA 22902</span>
              </div>
            </li>
            <li className='flex items-center gap-2'>
              <span className='w-3 h-3 bg-red-color text-red-color mr-3'></span>
              <div className='flex flex-col gap-1'>
                <span>(+1)672.342.1198 </span>
                <span>(+1)514.874.512</span>
              </div>
            </li>
            <li className='flex items-center gap-2'>
              <span className='w-3 h-3 bg-red-color text-red-color mr-3'></span>
              <div className='flex flex-col gap-1'>
                <span>tankyou@docsgarage.com</span>
                <span>hello@docsgarage.com</span>
              </div>
            </li>
          </motion.ul>
        </div>
        <div className=' hidden md:block  ease-in-out duration-300 md:absolute md:w-full lg:relative '>
          <img
            src={aboutph}
            alt=''
            className='w-full h-[600px] object-cover bg-center'
          />
        </div>
      </section>

      <section className='relative  py-16'>
        <div className=' flex items-center  justify-center gap-12'>
          {rotatedImages.map((img, _i) => (
            <div
              key={_i}
              className='transition-transform ease-in-out duration-300'
            >
              <ImageScroll image={img.image} />
            </div>
          ))}
        </div>
        <div className=' absolute top-1/2 left-0 -translate-y-1/2 h-full w-[100px] bg-gradient-to-r from-white from-10%  md:from-80% to-transparent'></div>
        <div className=' absolute top-1/2 right-0 -translate-y-1/2 h-full w-[100px] bg-gradient-to-l from-white from-10% md:from-80% to-transparent'></div>
      </section>
    </div>
  );
};

export default About;
