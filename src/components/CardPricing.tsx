import { GoIssueClosed, GoXCircle } from 'react-icons/go';
type CardPricingProps = {
  title: string;
  price: number;
};
const CardPricing = ({ price, title }: CardPricingProps) => {
  const getIcon = (feature: string) => {
    if (price == 39) {
      if (
        feature === 'Self-healing technology' ||
        feature === 'Staging areas' ||
        feature === 'Expert support'
      ) {
        return <GoXCircle className='text-2xl text-red-500' />;
      }
    } else if (price == 69) {
      if (feature === 'Expert support') {
        return <GoXCircle className='text-2xl text-red-500' />;
      }
    } else if (price > 70) {
      return <GoIssueClosed className='text-2xl text-green-500' />;
    }

    return <GoIssueClosed className='text-2xl text-green-500' />;
  };
  return (
    <div
      className={`border ${
        title === 'Individual' ? 'border-r-0 ' : ''
      } ${title === 'Collaborators' ? 'border-l-0 ' : ''}
    
         flex flex-col items-center ${
           title !== 'Professional' ? 'h-[730px]' : 'h-[840px] '
         }`}
    >
      <div
        className={`${
          title === 'Professional'
            ? 'bg-red-600 text-white-color py-[48px] px-4'
            : 'bg-global py-5 px-2'
        } w-full  text-center `}
      >
        <h3 className='text-[2.2rem] pb-2'>{title} </h3>
        <p className='text-[1.1rem] font-thin text-gray-text-second pb-2  '>
          Suitable for freelancers and personal worker
        </p>
      </div>
      <div className='py-8 flex flex-col items-center justify-center'>
        <div className='flex items-center gap-4 pb-6'>
          <div className=' relative '>
            <span className=' align-[32px] text-[1.5rem] font-thin px-1 text-gray-text-second'>
              $
            </span>
            <span className='text-[4.2rem] font-thin'>{price} </span>
          </div>
          <div className='flex flex-col gap-1 text-gray-text-second font-light'>
            <span>billed monthly or</span> <span>$30 billed annually</span>
          </div>
        </div>

        <ul className='flex flex-col gap-4 pb-10'>
          {[
            'Choose your data center',
            'Built for speed',
            'Powerful administration',
            'Highly secure network',
            'Self-healing technology',
            'Staging areas',
            'Expert support',
          ].map((feature, index) => (
            <li
              key={index}
              className='flex items-center gap-2'
            >
              {getIcon(feature)}
              <span className='text-md font-light'>{feature}</span>
            </li>
          ))}
        </ul>
        <div className='flex flex-col items-center gap-4'>
          <button className='border border-red-color text-red-color px-8 py-2.5 hover:bg-red-600  ease-in-out duration-300 hover:text-white text-sm'>
            GET STARTED NOW
          </button>
          <p className='text-sm font-extralight text-gray-text-second'>
            Cancel anytime. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPricing;
