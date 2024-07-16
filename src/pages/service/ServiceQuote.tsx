import ImagePage from '../../components/ImagePage';
import service from '../../assets/service.webp';
import SubTitles from '../../components/SubTitles';
import Job from '../../components/Job';
import manf from '../../assets/man-ff.webp';
import Divider from '../../components/Divider';
import { PiChatsCircle } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { fadeIn } from '../../components/variants';
const services = {
  title: 'Service',
  image: service,
};
const ServiceQuote = () => {
  return (
    <main className=' overflow-hidden'>
      <ImagePage {...services} />

      <section className=' grid grid-cols-1 gap-8 p-4'>
        <motion.div
          className='md:flex  py-4 '
          variants={fadeIn({ direction: 'up', delay: 0.25, value: 75 })}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0 }}
        >
          <SubTitles
            {...{
              titleleft: 'How we do',
              titleright: 'our job',
              classright: 'text-red-color',
              classDiv: 'items-center md:items-start md:py-2',
              classTitle:
                'text-[2.4rem]  md:text-[2.7rem] lg:text-[3.2rem] py-4 font-semibold',
            }}
          />
        </motion.div>
        <div className='grid  grid-cols-1 gap-4 px-12 md:grid-cols-3  md:px-4  lg:gap-20 lg:py-10'>
          <div className='flex flex-col gap-4'>
            <Job
              title='Repairing'
              nbr={95}
            />
            <Job
              title='Modification'
              nbr={97}
            />
            <Job
              title='Car protection'
              nbr={90}
            />
            <Job
              title='Tune up'
              nbr={99}
            />
          </div>
          <div className=' py-2 px-10 text-center font-extralight text-gray-600 md:col-span-2 md:flex md:py-0 md:gap-6 md:text-justify lg:gap-20'>
            <motion.p
              variants={fadeIn({ direction: 'up', delay: 0.25, value: 150 })}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0 }}
            >
              The classic “tune-up” was once the heart of the automotive
              business and contrary to some beliefs, today’s modern vehicles
              still need tune-ups to keep them performing at the most efficient
              levels. As the pace of technology quickened, the procedures
            </motion.p>
            <motion.p
              variants={fadeIn({ direction: 'down', delay: 0.25, value: -150 })}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0 }}
            >
              required to perform a traditional tune-up changed dramatically.
              Highly sophisticated ignition and fuel systems are now the norm,
              using one or more onboard computers to control critical engine and
              transmission management functions.
            </motion.p>
          </div>
        </div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-3 gap-4 py-20'>
        <motion.form
          className='w-full flex flex-col gap-10 md:gap-8  px-10 col-span-2'
          variants={fadeIn({ direction: 'up', delay: 0.25, value: 75 })}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0 }}
        >
          <div className='flex flex-col gap-4  md:flex-row md:gap-8'>
            <label
              htmlFor=''
              className='w-full  flex flex-col md:flex-grow gap-2'
            >
              <span>NAME</span>
              <input
                type='text'
                placeholder='Name'
                className='border border-gray-400 px-4 py-1.5 outline-none  '
              />
            </label>
            <label
              htmlFor=''
              className='w-full flex flex-col gap-2 md:flex-grow'
            >
              <div>
                <span>EMAIL</span> <span className='text-red-color'>*</span>
              </div>
              <input
                type='text'
                placeholder='Email'
                className='border border-gray-400 px-4 py-1.5 outline-none '
              />
            </label>
          </div>

          <div className='flex flex-col gap-4  md:flex-row md:gap-8'>
            <label
              htmlFor=''
              className='w-full  flex flex-col md:flex-grow gap-2'
            >
              <div>
                <span>WHAT'S YOUR VEHCILE? </span>
                <span className='text-red-color'>*</span>
              </div>
              <select
                name=''
                id=''
                defaultValue='Select'
                className='border border-gray-400 px-4 py-1.5 outline-none '
              >
                <option value='Select'>Select</option>
                <option value='Audi'>Audi</option>
                <option value='BMW'>BMW</option>
                <option value='Ferrary'>Ferrary</option>
                <option value='Toyota'>Toyota</option>
              </select>
            </label>
            <label
              htmlFor=''
              className='w-full  flex flex-col md:flex-grow gap-2'
            >
              <div>
                <span>WHAT'S YOUR PROBLEM ? </span>
                <span className='text-red-color'>*</span>
              </div>
              <select
                name=''
                id=''
                defaultValue='Select'
                className='border border-gray-400 px-4 py-1.5 outline-none '
              >
                <option value='Select'>Select</option>
                <option value='Audi'>Audi</option>
                <option value='BMW'>BMW</option>
                <option value='Ferrary'>Ferrary</option>
                <option value='Toyota'>Toyota</option>
              </select>
            </label>
          </div>

          <div className='flex flex-col gap-4  md:flex-row md:gap-8'>
            <label
              htmlFor=''
              className='w-full flex flex-col gap-2'
            >
              <div>
                <span>YOUR BUGDET ? </span>
                <span className='text-red-color'>*</span>
              </div>
              <select
                name=''
                id=''
                defaultValue='Select'
                className='border border-gray-400 px-4 py-1.5 outline-none '
              >
                <option value='Select'>Select</option>
                <option value='Audi'>Audi</option>
                <option value='BMW'>BMW</option>
                <option value='Ferrary'>Ferrary</option>
                <option value='Toyota'>Toyota</option>
              </select>
            </label>

            <label
              htmlFor=''
              className='w-full flex flex-col gap-2'
            >
              <span>PICK A DATE</span>
              <input
                type='date'
                placeholder=''
                className='border border-gray-400 px-4 py-1.5 outline-none '
              />
            </label>
          </div>

          <div className='w-full flex flex-col gap-4'>
            <label
              htmlFor=''
              className='w-full flex flex-col gap-2'
            >
              <span> MESSAGE</span>
            </label>
            <textarea
              name=''
              id=''
              placeholder='Message'
              className='border border-gray-400 px-4 py-1.5 outline-none '
            ></textarea>
          </div>

          <div className='w-full flex flex-col gap-4'>
            <div className='flex items-center  gap-2 md:gap-4'>
              <input
                type='checkbox'
                className='w-4 h-4'
              />
              <p className='text-[1rem] font-extralight'>
                I HAVE READ AND ACCEPTED
                <span className='text-red-color'>TERMS</span> AND{' '}
                <span className='text-red-color'>PRIVACY</span>
              </p>
            </div>
            <div className='w-full flex '>
              <button className='border-none outline-none bg-red-color text-white text-[0.9rem] font-medium py-2 text-center flex-grow hover:bg-red-800 ease-in-out duration-300'>
                SUBMIT
              </button>
            </div>
          </div>
        </motion.form>
        <motion.div
          className='flex flex-col lg:items-center lg:justify-center'
          variants={fadeIn({ direction: 'left', delay: 0.25, value: -75 })}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <SubTitles
            {...{
              titleleft: 'Service',
              titleright: 'Form',
              classright: 'text-red-color',
              className: ' text-[2rem] md:text-[2.1rem] lg:text-[3rem]',
              classDiv: 'items-center  py-4 mb-2',
              classTitle:
                'text-[2.3rem] sm:text-[2.2rem] md:text-[2.2rem] lg:text-[3.2rem] py-4',
            }}
          />
          <p className='text-center font-light px-16 leading-relaxed '>
            "At vero eos et accusamus et iusto odio{' '}
            <strong>dignissimos ducimus</strong> qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint
          </p>
        </motion.div>
      </section>

      <section className=' grid grid-cols-1 md:grid-cols-2 lg:gap-12 w-full h-auto bg-light-dark mb-2'>
        <motion.div
          className=' flex flex-col items-center justify-center pt-12 md:px-10  lg:p-16'
          variants={fadeIn({ direction: 'left', delay: 0.25, value: 175 })}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0 }}
        >
          <div className='flex items-center gap-8 md:w-full '>
            <div className='w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] bg-red-color rounded-full flex justify-center items-center'>
              <PiChatsCircle className='text-[1.6rem] md:text-[2rem] text-white' />
            </div>
            <p className='text-red-color text-md'>FREE QUOTE</p>
          </div>
          <div className='inline-block text-center sm:py-8 sm:px-12 md:text-start py-6 md:py-12 font-semibold'>
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
          <motion.img
            src={manf}
            alt=''
            className='w-full h-[500px] md:w-[400px] md:h-auto  object-contain'
            variants={fadeIn({ direction: 'right', delay: 0.25, value: -175 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          />
        </div>
      </section>
    </main>
  );
};

export default ServiceQuote;
