import { useEffect, useState, useContext} from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../components/variants';
import CardImage from '../../components/CardImage';
import Divider from '../../components/Divider';
import StatusCarage from '../../components/StatusCarage';
import Card from '../../components/Card';
import ImageSlider from '../../components/ImageSlider';
import { darkModeVideo } from '../../contexts/ContextHead';
import { products, CardChooseProps } from '../../data/Proudct';

import './Home.css';

import { PiEngineFill, PiChatsCircle } from 'react-icons/pi';
import { FaPaintBrush, FaCar, FaRegPlayCircle, FaKey } from 'react-icons/fa';
import { IoIosCheckmark } from 'react-icons/io';
import { MdVerified } from 'react-icons/md';
import { SlEnergy } from 'react-icons/sl';
import { GiMechanicGarage } from 'react-icons/gi';
import manf from '../../assets/man-ff.webp';
import paint from '../../assets/paint.webp';
import enging from '../../assets/engine.webp';
import racing from '../../assets/racing.webp';
import car from '../../assets/car.webp';
import man from '../../assets/man-1.webp';
import photo from '../../assets/photo.webp';
import img1 from '../../assets/Group-1-1-1.webp';
import img2 from '../../assets/Group-1.webp';
import img3 from '../../assets/Group-2-1.webp';
import img4 from '../../assets/Group-3-1.webp';
import img5 from '../../assets/Group-4-1.webp';
import img6 from '../../assets/Group-6-1.webp';
import img7 from '../../assets/Group-7-1.webp';
import img8 from '../../assets/Group-8-1.webp';

import oil from '../../assets/mechanics-working1.webp';
import gear from '../../assets/opening-of-car-automatic2.webp';
import body from '../../assets/car-repair-3.webp';
import client from '../../assets/car-mechanics-fixing-car-4.webp';
import Video from '../../components/Video';
import SubTitles from '../../components/SubTitles';
import CardChoose from '../../components/CardChoose';
import Article from '../../components/Article';
import CommantArt from '../../components/CommantArt';
import CardShops from '../../components/CardShops';

const choose: CardChooseProps[] = [
  {
    title: '19+ Years Experienc',
    Icon: GiMechanicGarage,
  },
  {
    title: 'Car full protected',
    Icon: FaCar,
  },
  {
    title: 'Guaranty services',
    Icon: FaKey,
    isActive: true,
  },
  {
    title: 'Overseas Project',
    Icon: SlEnergy,
  },
  {
    title: 'World Class Awardee',
    Icon: MdVerified,
  },
];

const IMAGES: string[] = [img1, img2, img3, img4, img5, img6, img7, img8];
const Home = () => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [isPlaying, setIsPaying] = useState<boolean>(false);
  useEffect(() => {
    const titles = ['automobiles', 'big trucks', 'motorcycles'];
    const updateTitle = () => {
      const nbr = Math.floor(Math.random() * titles.length);
      setTitle(titles[nbr]);
    };
    updateTitle();
    const interval = setInterval(updateTitle, 2000);
    return () => clearInterval(interval);
  }, []);
  const handleClickVideo = () => {
    const nextIsPlaying = !isPlaying;
    setIsPaying(nextIsPlaying);
  };
  const dark = useContext(darkModeVideo);
  if (dark === undefined) {
    return null;
  }
  const { darkMode, setDarkMode } = dark;
  const newArrivals = {
    titleleft: 'New',
    titleright: 'arrivals',
    classleft: 'text-red-color',
    classDiv: 'items-center',
    classTitle:
      'text-[2rem] sm:text-[2.2rem] md:text-[2.7rem] lg:text-[3.2rem] py-4 font-bold',
  };
  const whyChoseUs = {
    titleleft: 'Why',
    titleright: 'choose us',
    classright: 'text-red-color',
    classDiv: 'items-center',
    classTitle:
      'text-[2rem] sm:text-[2.2rem] md:text-[2.7rem] lg:text-[3.2rem] py-4 font-bold',
  };
  const Articles = {
    titleleft: 'News',
    subTitle: '&',
    titleright: 'articles',
    classMidal: 'text-red-color',
    classDiv: 'items-center',
    classTitle:
      'text-[2rem] sm:text-[2.2rem] md:text-[2.7rem] lg:text-[3.2rem] py-4 font-bold',
  };

  return (
    <main className=' relative overflow-hidden '>
      <section className='section-home w-full h-[20rem] md:h-[45rem]  relative grid  grid-cols-1  md:grid-cols-[repeat(2,1fr)] md:gap-25 '>
        <span className='section'></span>

        <motion.div
          className=' relative text-light-second-color flex items-center justify-center md:justify-start md:items-start lg:justify-center lg:items-center  '
          variants={fadeIn({ direction: 'up', delay: 0.25, value: 80 })}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0 }}
        >
          <div className=' py-10 px-16 flex flex-col items-center justify-center md:items-stretch md:justify-stretch gap-6 md:gap-10 '>
            <div className='text-[2rem] text-center sm:text-start md:text-[3.6rem] lg:text-[4.6rem] sm:leading-tight    font-bold '>
              <span>Get an instant power to your {title}</span>
            </div>
            <Divider
              props='bg-white-color'
              className='items-center justify-center  md:justify-start md:items-start md: w-96'
            />

            <div className=' grid px-16 md:p-0 md:grid-cols-2 md:gap-6'>
              <button className=' border-none outline-none py-3 px-6  text-center bg-red-color '>
                BOOK SCHEDULE
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className=' flex flex-col md:flex-col lg:relative h-auto py-6 lg:flex-row lg:mb-20 gap-6'>
        <div className='flex flex-col justify-center items-center px-2  gap-10 py-8 '>
          <motion.div
            className='flex items-end  gap-2 lg:flex-col lg:items-startco font-bold'
            variants={fadeIn({ direction: 'right', delay: 0.25, value: 150 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
            <span className='text-5xl text-start'>Our</span>
            <span className='text-red-color text-5xl'>services</span>
          </motion.div>

          <motion.div
            variants={fadeIn({ direction: 'up', delay: 0.25, value: 100 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
            <Divider props='bg-red-color' />
          </motion.div>
          <motion.div
            className='text-gray-600 text-center text-xl font-extralight lg:w-1/3 lg:text-balance  '
            variants={fadeIn({ direction: 'up', delay: 0.25, value: 100 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
            There is no life's elitism with a
            <strong className='text-black px-1'>free quiver</strong>{' '}
            propagandism
          </motion.div>
        </div>
        <div className=' flex flex-col justify-between gap-6 px-6 md:flex-row md:gap-8 lg:absolute -top-16 right-0 lg:w-2/3'>
          <CardImage
            title='Body paint works'
            subTitle='ENGINE . SERVICE'
            Icon={FaPaintBrush}
            img={paint}
          />
          <CardImage
            title='Engine works'
            subTitle='ENGINE . SERVICE'
            Icon={PiEngineFill}
            img={enging}
          />
          <CardImage
            title='Racing competition'
            subTitle='ENGINE . SERVICE'
            Icon={FaCar}
            img={racing}
          />
        </div>
      </section>
      <section className='flex flex-col px-6  lg:grid  lg:grid-cols-[repeat(2,1fr)] gap-16 py-6 md:py-6 md:mt-10 lg:mb-12 lg:py-20 lg:gap-x-20 '>
        <div className='mb-6 md:mb-0 relative flex justify-end '>
          <img
            src={car}
            alt=''
            className='absolute w-[260px]  -bottom-[74px] -left-0   object-cover h-auto sm:w-[360px] sm:-bottom-[60px]  sm:left-[40px]  md:-bottom-[40px]  md:left-[10px]  md:w-[548px] lg:h-[560px] lg:w-[500px] lg:-bottom-[100px] lg:left-0'
          />
          <img
            src={man}
            alt=''
            className='w-[280px] sm:w-[380px] md:w-[548px] h-auto object-cover ml-12  '
          />
        </div>
        <div className='flex flex-col items-center justify-center md:justify-normal md:items-start gap-6 md:gap-8 py-4'>
          <motion.div
            className='text-[2.4rem] md:text-[3rem] text-center md:text-start font-semibold'
            variants={fadeIn({ direction: 'left', delay: 0.25, value: 150 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
            <span className=''>Docs Garage offers</span>
            <span className='text-red-color px-2'>top-quality auto repair</span>
            <span>and maintenance services</span>
          </motion.div>
          <motion.div
            variants={fadeIn({ direction: 'left', delay: 0.35, value: 150 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
            <Divider props='bg-red-color' />
          </motion.div>
          <div className='flex flex-col items-center md:items-stretch md:justify-between  gap-6 md:gap-10'>
            <p className='text-justify text-text-color md:font-extralight  md:leading-loose'>
              But in truth we both accuse those who are deserving of just
              hatred, who have been softened by
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
          </div>
        </div>
      </section>

      <section className='flex flex-col justify-between  md:grid md:grid-cols-2 md:gap-20  lg:grid-cols-3 lg:place-items-end px-6 md:py-16 py-20'>
        <StatusCarage
          title='CLIENT SATISFACTION'
          numberCl='100%'
        />
        <StatusCarage
          title='AUTOMOBILES & TRUCKS REPAIRED'
          numberCl='250+'
        />
        <StatusCarage
          title='BOLTS & NUTS INSTALLED'
          numberCl='8778'
        />
      </section>

      <section className='grid grid-cols-1  gap-y-2  sm:grid-cols-[repeat(3,minmax(228px,1fr))] sm:gap-2   sm:h-[556px] mb-3 px-2'>
        <Card
          title='Checking oil'
          subTitle='Manitenace'
          img={oil}
          className='row-span-2  '
        />
        <div className='bg-light-second flex flex-col justify-center items-center gap-y-4  h-[276px] '>
          <h5 className='text-3xl'>Full body repair</h5>
          <button className='border-none outline-none bg-red-color hover:bg-red-800 duration-200 text-light-second-color px-8 py-2'>
            BOOK SCHEDULE
          </button>
        </div>
        <Card
          title='Talk with client'
          subTitle='Manitenace'
          img={client}
        />
        <Card
          title='Checking gear'
          subTitle='Manitenace'
          img={gear}
        />
        <Card
          title='Cleaninig body'
          subTitle='painting'
          img={body}
        />
      </section>

      <section className=' relative overflow-hidden w-full h-[200px] md:h-[282px] flex items-center justify-center bg-red-color  '>
        <ImageSlider imageURL={IMAGES} />
        <div className=' absolute top-1/2 left-0 -translate-y-1/2 h-full w-[80px] bg-gradient-to-r from-red-color from-10%  md:from-50% to-transparent'></div>
        <div className=' absolute top-1/2 right-0 -translate-y-1/2 h-full w-[80px] bg-gradient-to-l from-red-color from-10% md:from-50% to-transparent'></div>
      </section>

      <section className='md:py-8 flex flex-col  gap-10 py-8'>
        <motion.div
          variants={fadeIn({ direction: 'up', delay: 0.25, value: 70 })}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0 }}
        >
          <SubTitles {...newArrivals} />
        </motion.div>
        <div className=' grid sm:grid-cols-2 sm:gap-4 px-8  md:grid-cols-3 md:gap-5 md:px-12 lg:grid-cols-4  lg:gap-6 '>
          {products.map((product, index) => (
            <motion.div
              variants={fadeIn({ direction: 'up', delay: 0.25, value: 10 })}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0 }}
            >
              <CardShops
                key={index}
                {...product}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className=' relative '>
        <section className='section-video relative w-full h-[560px] object-cover  md:h-[700px] text-white py-12 flex items-end justify-center sm:grid sm:grid-cols-2 sm:gap-4  md:items-center'>
          <div> </div>
          <div className='flex flex-col items-center justify-center z-30  '>
            <motion.div
              className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6  '
              variants={fadeIn({ direction: 'down', delay: 0.25, value: 75 })}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0 }}
            >
              <FaRegPlayCircle
                className=' text-[50px] md:text-[60px] ease-in-out duration-1000'
                onClick={() => {
                  handleClickVideo();
                  setDarkMode(!darkMode);
                }}
              />
              <p className='uppercase py-1'>Play video</p>
            </motion.div>
            <motion.div
              className='py-2 text-center sm:py-3 '
              variants={fadeIn({ direction: 'left', delay: 0.25, value: 75 })}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h5 className='text-[1.8rem] sm:text-balance sm:text-[2.4rem] md:text-[3rem]'>
                Mollis purus sit consectetur cras
              </h5>
            </motion.div>
            <motion.div
              className='pb-3 pt-2.5 md:pb-6'
              variants={fadeIn({ direction: 'left', delay: 0.25, value: 75 })}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
            >
              <Divider props='bg-red-color' />
            </motion.div>
            <motion.div
              className='flex flex-col justify-center items-center gap-y-4'
              variants={fadeIn({ direction: 'up', delay: 0.25, value: 100 })}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <p className='text-wrap w-2/3 text-center font-extralight leading-relaxed md:leading-loose text-light-dark'>
                &ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut elit telus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo &ldquo;
              </p>
              <div className='flex flex-col text-center'>
                <span className='text-[19px] py-1 md:text-[21px]'>
                  Aisha Shahab{' '}
                </span>
                <span className='font-thin '>UNI STUDENT</span>
              </div>
            </motion.div>
          </div>
        </section>
        <div className='w-full h-auto absolute top-6  z-[2000]'>
          <div className='w-full h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
            {isPlaying && (
              <Video
                handleClickVideo={handleClickVideo}
                setDarkMode={setDarkMode}
                darkMode={darkMode}
              />
            )}
          </div>
        </div>
      </section>
      <section className='flex flex-col py-12 px-6'>
        <motion.div
          variants={fadeIn({ direction: 'down', delay: 0.25, value: 70 })}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0 }}
        >
          <SubTitles {...whyChoseUs}>
            <motion.div
              className='py-6 px-4 text-center leading-relaxed '
              variants={fadeIn({ direction: 'up', delay: 0.25, value: 70 })}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0 }}
            >
              <p className='text-gray-text-second font-extralight '>
                Donec id elit non mi porta gravida{' '}
                <strong className='text-black font-semibold px-1'>
                  lorem ipsum dolor
                </strong>
                . Fusce dapibus, telus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo
              </p>
            </motion.div>
          </SubTitles>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(5,minmax(180px,300px))] lg:px-6 lg:gap-4 py-10'>
          {choose.map((item) => (
            <CardChoose
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </section>
      <section className='flex flex-col'>
        <div className='grid grid-cols-1  lg:grid-cols-2 lg:gap-16 p-2 md:p-12  bg-bg-color '>
          <motion.div
            className='flex justify-center items-start md:justify-start  h-full pb-8'
            variants={fadeIn({ direction: 'up', delay: 0.25, value: 75 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
            <SubTitles {...Articles} />
          </motion.div>

          <div className='md:grid md:grid-cols-2 md:gap-x-10 md:pt-8 lg:flex lg:flex-col  lg:h-full'>
            <Article title='Does My Mechanic Owe Me a Refund?' />
            <Article title='After 7 Years, a Little Oil Loss Is Not a Big Deal' />
            <Article title='Love It or List It: The Case of the Bad Luck Truck' />
          </div>
        </div>
        <div className='w-full lg:h-[360px]  lg:relative grid grid-cols-1 md:grid-cols-2'>
          <div>
            <img
              src={photo}
              alt=''
              className='w-full  h-[500px] md:h-[400px] md:w-[500px]  origin-cente object-cover lg:h-[700px] lg:w-[500px]  lg:absolute lg:-top-[340px] lg:left-2 '
            />
          </div>
          <div className='flex items-center justify-center p-6'>
            <CommantArt />
          </div>
        </div>
      </section>

      <section className=' grid grid-cols-1 md:grid-cols-2 lg:gap-12 w-full h-auto bg-light-dark mb-2'>
        <motion.div
          className=' flex flex-col items-center justify-center pt-12 md:px-10  lg:p-16'
          variants={fadeIn({ direction: 'right', delay: 0.25, value: -150 })}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
        >
          <div className='flex items-center gap-8 md:w-full '>
            <div className='w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] bg-red-color rounded-full flex justify-center items-center'>
              <PiChatsCircle className='text-[1.6rem] md:text-[2rem] text-white' />
            </div>
            <p className='text-red-color text-md'>FREE QUOTE</p>
          </div>
          <div className=' text-center sm:py-8 md:text-start py-6 md:py-12 font-bold'>
            <span className='text-[2.4rem] md:text-[2.8rem] lg:text-[3rem]'>
              Looking for
            </span>
            <span className='text-red-color  text-[2.4rem] md:text-[2.8rem] lg:text-[3rem] px-4'>
              car specialist
            </span>
            <span className='text-[2.4rem] md:text-[2.8rem] lg:text-[3rem]'>
              for your special car?
            </span>
          </div>
          <div className='md:w-full'>
            <Divider props='bg-red-color' />
          </div>
          <div className=' py-6 sm:py-8 md:py-12 md:w-full'>
            <button className='border-none outline-none bg-red-color text-white px-10 py-4 hover:scale-110 transform ease-in-out duration-600 hover:bg-red-700'>
              ASK FOR QUOTE
            </button>
          </div>
        </motion.div>
        <div className=' flex justify-end items-end  pt-6'>
          <img
            src={manf}
            alt=''
            className='w-full h-[500px] md:w-[400px] md:h-auto  object-contain'
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
