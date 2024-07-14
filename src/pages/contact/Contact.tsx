import ImagePage from '../../components/ImagePage';
import contact from '../../assets/contact.webp';
import { motion } from 'framer-motion';
import { fadeIn } from '../../components/variants';
import SubTitles from '../../components/SubTitles';
import Questions from '../../components/Questions';
import Divider from '../../components/Divider';
const contacts = {
  title: 'Contact us',
  image: contact,
};
const Contact = () => {
  return (
    <main className='flex flex-col overflow-hidden'>
      <ImagePage {...contacts} />
      <section className='grid md:grid-cols-2  px-12 md:p-6  md:gap-20'>
        <div className=''>
          <div className='flex items-center justify-center md:items-start md:justify-normal '>
            <motion.div
              variants={fadeIn({ direction: 'left', delay: 0.25, value: 75 })}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0 }}
            >
              <SubTitles
                {...{
                  titleleft: "Let's",
                  titleright: 'talk',
                  classleft: 'text-red-color',
                  className: 'text-[2.4rem]  lg:text-[4rem]',
                  classDiv: 'items-center pb-6 md:items-start ',
                  classTitle:
                    'text-[2.4rem]  md:text-[2.8rem] lg:text-[3.2rem] py-4 font-bold',
                }}
              />
            </motion.div>
          </div>
          <div className='flex flex-col gap-2 '>
            <motion.p
              className='text-center px-10 leading-relaxed font-light text-gray-text-second md:text-justify md:px-4 md:text-wrap'
              variants={fadeIn({ direction: 'up', delay: 0.25, value: 45 })}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0 }}
            >
              Please enter the information below and we’ll get right back to you
            </motion.p>
            <div className='flex flex-col items-center justify-center gap-4 md:flex-row  md:justify-between md:items-start md:gap-12 p-4'>
              <motion.div
                className='flex flex-col  text-center md:text-start gap-2 px-8 md:px-0'
                variants={fadeIn({ direction: 'up', delay: 0.25, value: 75 })}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0 }}
              >
                <h5 className=' font-semibold'>San Francisco</h5>
                <p className='  md:text-wrap lg:w-2/3  text-gray-text-second font-extralight'>
                  179 Clinton Street, Little Rock San Francisco, SF 32671
                </p>
                <h6 className='text-red-color py-2 font-extralight'>
                  +1.876.2131.222
                </h6>
              </motion.div>
              <motion.div
                className='flex flex-col gap-2 text-center md:text-start'
                variants={fadeIn({ direction: 'up', delay: 0.25, value: 75 })}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0 }}
              >
                <h5 className=' font-semibold '>Virginia</h5>
                <p className='md:text-wrap   text-gray-text-second font-extralight'>
                  1428 Callison Lane Building Virginia, VA 22902
                </p>
                <h6 className='text-red-color py-2 font-extralight'>
                  +1.876.2131.222
                </h6>
              </motion.div>
            </div>
          </div>
        </div>
        <div className='w-full h-auto py-6  flex flex-col  justify-center'>
          <motion.form
            className='flex flex-col  gap-8 md:pr-6'
            variants={fadeIn({ direction: 'up', delay: 0.3, value: 75 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
            <input
              type='text'
              placeholder='Name'
              className='border border-gray-400 px-4 py-1.5 outline-none'
            />
            <input
              type='email'
              placeholder='Email'
              className='border border-gray-400 px-4 py-1.5 outline-none'
            />
            <textarea
              placeholder='Message'
              className='w-full h-[140px] px-4 py-1.5 border border-gray-400 outline-none'
            ></textarea>
            <div className='w-full flex items-center justify-center '>
              <button className='w-full  border-none  outline-none  px-12 py-1.5 text-white bg-red-color hover:bg-red-800 '>
                SEND
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      <section>
        <motion.div
          variants={fadeIn({ direction: 'right', delay: 0.25, value: 275 })}
          initial='hidden'
          whileInView={'show'}
          viewport={{
            once: false,
            amount: 0,
          }}
        >
          <SubTitles
            {...{
              titleleft: 'Frequently',
              subTitle: 'Ask',
              titleright: 'Questions',
              classMidal: 'text-red-color',
              classDiv: 'items-center pb-6  ',
              classTitle:
                'text-[2rem] sm:text-[2.4rem]  md:text-[2.8rem] lg:text-[3.2rem] py-4',
            }}
          />
        </motion.div>
        <div className='grid grid-cols-1 gap-4 p-8 md:grid-cols-3  sm:gap-6 md:gap-14 lg:gap-20'>
          <motion.div
            className='flex flex-col gap-3 py-2'
            variants={fadeIn({ direction: 'right', delay: 0.3, value: -175 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
            <Questions
              title='Cum sociis natoque penatibus'
              subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo'
            />
            <Questions
              title='Cum sociis natoque penatibus'
              subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo'
            />
            <Questions
              title='Cum sociis natoque penatibus'
              subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo'
            />
          </motion.div>
          <motion.div
            className='flex flex-col gap-3 py-8 sm:py-2'
            variants={fadeIn({ direction: 'left', delay: 0.3, value: 175 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
            <Questions
              title='Cum sociis natoque penatibus'
              subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo'
            />
            <Questions
              title='Cum sociis natoque penatibus'
              subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo'
            />
            <Questions
              title='Cum sociis natoque penatibus'
              subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo'
            />
          </motion.div>
          <motion.div
            className='flex flex-col gap-3 py-2'
            variants={fadeIn({ direction: 'right', delay: 0.3, value: -175 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
            <Questions
              title='Cum sociis natoque penatibus'
              subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo'
            />
            <Questions
              title='Cum sociis natoque penatibus'
              subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo'
            />
            <Questions
              title='Cum sociis natoque penatibus'
              subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo'
            />
          </motion.div>
        </div>
      </section>

      <section className=' bg-global w-full h-[400px] md:h-[500px] grid md:grid-cols-2 lg:gap-12'>
        <motion.div
          className=' w-full h-full flex flex-col items-center justify-center'
          variants={fadeIn({ direction: 'left', delay: 0.25, value: -175 })}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0 }}
        >
          <div className='text-center text-[2rem] md:text-[2.6rem] md:text-start text-wrap px-16 '>
            <span>Get our newest</span>
            <span className='text-red-color px-4'>discount and promo</span>
            <span>for your special car?</span>
          </div>
          <div className='w-full flex items-center justify-center md:justify-normal px-12 py-6'>
            <Divider props='bg-red-color' />
          </div>
        </motion.div>
        <div className='w-full md:h-full flex flex-col items-center justify-center'>
          <motion.form
            className=' w-[90%]  md:w-[80%] lg:w-[75%] flex items-center justify-center '
            variants={fadeIn({ direction: 'left', delay: 0.25, value: 175 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
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
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
