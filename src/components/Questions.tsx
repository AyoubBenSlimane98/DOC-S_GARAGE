import { useState } from 'react';
type QuestionsProps = {
  title: string;
  subTitle: string;
};
const Questions = ({ title, subTitle }: QuestionsProps) => {
    const [show,setShow] = useState<boolean>(false); 
    return (
      <div
        className=' ease-in-out duration-1000 border-b py-2'
        onClick={() => setShow(!show)}
      >
        <h5 className='font-medium text-[1rem] md:text-[1.2rem] pb-4'>
          {title}
        </h5>
        {show && (
          <div className='text-gray-text-second text-wrap leading-relaxed font-extralight py-1'>
            {subTitle}{' '}
          </div>
        )}
      </div>
    );
};

export default Questions;
