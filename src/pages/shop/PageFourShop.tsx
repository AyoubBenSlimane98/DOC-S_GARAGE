import CardShops from '../../components/CardShops';
import { products } from '../../data/Proudct';
import { motion } from 'framer-motion';
import { fadeIn } from '../../components/variants';

const PageFourShop = () => {
  return (
    <div className=' container mx-auto  grid place-items-center sm:grid-cols-2 sm:gap-4  md:grid-cols-4 md:gap-6 md:place-content-center md:place-items-center  p-4  '>
      {products.map((product, index) => (
        <motion.div
          className='w-full flex items-center justify-center'
          variants={fadeIn({ direction: 'up', delay: 0.3, value: 75 })}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0 }}
        >
          <CardShops
            key={index}
            {...product}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PageFourShop;
