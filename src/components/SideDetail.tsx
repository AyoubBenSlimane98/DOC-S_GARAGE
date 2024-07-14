import { ElementType } from 'react';

interface SideDetailProps {
  Icon: ElementType;
  title: string;
  about: string;
}

const SideDetail = ({ Icon, title, about }:SideDetailProps) => {
    return (
      <div className='flex items-start gap-4'>
        <Icon className='text-red-color font-bold text-[1.6875rem]' />
        <div>
          <span className='text-[1.125rem] text-black-color'>{title} </span>
          <p className='text-gray-600 text-md '>{about} </p>
        </div>
      </div>
    );
};

export default SideDetail;
