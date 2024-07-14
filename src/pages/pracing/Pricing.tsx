import ImagePage from '../../components/ImagePage';
import pricing from '../../assets/pricing.webp';
import SubTitles from '../../components/SubTitles';
import { IoIosCheckmark } from 'react-icons/io';
import CardPricing from '../../components/CardPricing';
import Divider from '../../components/Divider';
import { motion } from 'framer-motion';
import { fadeIn } from '../../components/variants';
const Pricing = () => {
  return (
    <main>
      <ImagePage {...{ title: 'Pricing', image: pricing }} />
      <section className='flex flex-col gap-10 md:grid md:gap-4 md:grid-cols-2  md:py-16 lg:gap-12 overflow-hidden'>
        <motion.div
          variants={fadeIn({ direction: 'up', delay: 0.25, value: 75 })}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0 }}
        >
          <SubTitles
            {...{
              titleleft: "Doc's Garage",
              titleright:
                'specializes in all your general automotive needs from A to Z.',
              classleft: 'text-red-color inline-block',
              classDiv:
                'items-center justify-center px-10 py-6 sm:px-8 sm:py-10 md:justify-normal md:items-start md:pl-8  ',
              classTitle:
                'text-center text-[1.9rem] pb-6 sm:text-[2.6rem] leading-snug  md:text-[2.56rem] md:text-start  md:pb-12 lg:text-[3.43rem] md:leading-tight lg:leading-none font-bold ',
            }}
          />
        </motion.div>

        <aside className='flex flex-col gap-8 px-8 lead  md:py-10 md:p-5  '>
          <motion.p
            className=' font-light text-pretty leading-snug sm:text-[1.5rem] sm:font-thin sm:text-center sm:leading-normal text-gray-600  md:text-[1rem] md:font-extralight md:text-justify '
            variants={fadeIn({ direction: 'right', delay: 0.25, value: 75 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false , amount: 0 }}
          >
            We have 3 generations of Alignment and tire experience. We are a
            state certified shop for auto repair including your pesky check
            engine lights and emission issues. We cover all your basic
            maintenance needs from your 30K service to your 90K service.
          </motion.p>
          <motion.div
            className='flex flex-col items-center gap-1 sm:gap-3 md:flex-row md:justify-between '
            variants={fadeIn({ direction: 'up', delay: 0.25, value: 75 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
            <div className='flex flex-col items-center justify-center gap-2 md:items-start md:justify-normal md:gap-4'>
              <h5 className='text-[1.325rem] sm:text-[1.836rem] font-semibold md:text-[1.425rem]  md:font-medium md:px-1'>
                Our Vision
              </h5>
              <ul className='flex flex-col  gap-1'>
                <li className=' flex  md:items-start md: gap-1'>
                  <IoIosCheckmark className='text-red-color text-[1.6rem]  ' />
                  <span className='text-[1.1rem] sm:text-[1.4rem] md:text-[1.1rem]  font-thin text-gray-600'>
                    Maecenas sed diam
                  </span>
                </li>
                <li className=' inline-flex items-center gap-1'>
                  <IoIosCheckmark className='text-red-color text-[1.6rem] ' />
                  <span className='text-[1.1rem] sm:text-[1.4rem] md:text-[1.1rem]  font-thin text-gray-600'>
                    Blandit sit amet non
                  </span>
                </li>
                <li className=' inline-flex items-center gap-1'>
                  <IoIosCheckmark className='text-red-color text-[1.6rem] ' />
                  <span className='text-[1.1rem] font-thin sm:text-[1.4rem]  md:text-[1.1rem] text-gray-600'>
                    Purus risus varius
                  </span>
                </li>
                <li className=' inline-flex items-center gap-1'>
                  <IoIosCheckmark className='text-red-color text-[1.6rem] ' />
                  <span className='text-[1.1rem] sm:text-[1.4rem] md:text-[1.1rem]  font-thin text-gray-600'>
                    Egestas sit amet lorem
                  </span>
                </li>
              </ul>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 md:items-start md:justify-normal md:gap-4'>
              <h5 className='text-[1.325rem] sm:text-[1.836rem] font-semibold md:text-[1.425rem]  md:font-medium md:px-1'>
                Our Mission
              </h5>
              <ul className='flex flex-col  gap-1'>
                <li className=' flex  md:items-start md: gap-1'>
                  <IoIosCheckmark className='text-red-color text-[1.6rem]  ' />
                  <span className='text-[1.1rem] sm:text-[1.4rem] md:text-[1.1rem]  font-thin text-gray-600'>
                    Maecenas sed diam
                  </span>
                </li>
                <li className=' inline-flex items-center gap-1'>
                  <IoIosCheckmark className='text-red-color text-[1.6rem] ' />
                  <span className='text-[1.1rem] sm:text-[1.4rem] md:text-[1.1rem]  font-thin text-gray-600'>
                    Blandit sit amet non
                  </span>
                </li>
                <li className=' inline-flex items-center gap-1'>
                  <IoIosCheckmark className='text-red-color text-[1.6rem] ' />
                  <span className='text-[1.1rem] font-thin sm:text-[1.4rem]  md:text-[1.1rem] text-gray-600'>
                    Purus risus varius
                  </span>
                </li>
                <li className=' inline-flex items-center gap-1'>
                  <IoIosCheckmark className='text-red-color text-[1.6rem] ' />
                  <span className='text-[1.1rem] sm:text-[1.4rem] md:text-[1.1rem]  font-thin text-gray-600'>
                    Egestas sit amet lorem
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </aside>
      </section>
      <section className='flex flex-col gap-10 pb-10'>
        <motion.div
          variants={fadeIn({ direction: 'left', delay: 0.25, value: 275 })}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0 }}
        >
          <SubTitles
            {...{
              titleleft: 'Get the ',
              subTitle: 'best price',
              titleright: 'from us',
              classMidal: 'text-red-color',
              classDiv:
                'items-center justify-center px-10 py-6 sm:px-8 sm:py-10  ',
              classTitle:
                'text-center text-[1.9rem] pb-6 sm:text-[2.6rem] leading-snug  md:text-[2.8rem]   md:pb-12 lg:text-[3.43rem] md:leading-tight lg:leading-none font-bold ',
            }}
          />
        </motion.div>
        <div className='flex flex-col gap-10 md:flex-row  md:items-center lg:items-center lg:justify-center md:gap-0'>
          <CardPricing
            title='Individual'
            price={39}
          />
          <CardPricing
            title='Professional'
            price={69}
          />
          <CardPricing
            title='Collaborators'
            price={99}
          />
        </div>
      </section>

      <section className=' bg-global w-full h-[400px] md:h-[500px] grid md:grid-cols-2 lg:gap-12'>
        <motion.div
          className=' w-full h-full flex flex-col items-center justify-center'
          variants={fadeIn({ direction: 'up', delay: 0.25, value: 75 })}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className='text-center text-[2rem] md:text-[2.6rem] md:text-start text-wrap px-16 font-bold'>
            <span className=' md:block pr-2'>Get our newest</span>
            <span className='text-red-color pr-4'>discount and promo</span>
            <span>for your special car?</span>
          </div>
          <div className='w-full flex items-center justify-center md:justify-normal px-12 py-6'>
            <Divider props='bg-red-color' />
          </div>
        </motion.div>
        <div className='w-full md:h-full flex flex-col items-center justify-center'>
          <form className=' w-[90%]  md:w-[80%] lg:w-[75%] flex items-center justify-center '>
            <input
              type='email'
              placeholder='Email'
              className=' border border-gray-400 px-4 py-1.5 outline-none flex-grow border-r-0'
            />
            <div className='r'>
              <button className=' border border-red-color  outline-none  px-8 py-1.5 text-white bg-red-color hover:bg-red-800 '>
                SEND
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
