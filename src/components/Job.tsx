import { useEffect, useState } from 'react';

type JobsProps = {
  title: string;
  nbr: number;
};

const Job = ({ title, nbr }: JobsProps) => {
  const [number, setNumber] = useState<number>(0);
  useEffect(() => {
    let p: number = 0;
    const interval = setInterval(() => {
      if (p <= nbr) {
        setNumber(p);
        p++;
      } else {
        clearInterval(interval);
      }
    },10);

    return () => clearInterval(interval);
  }, [nbr]);
  return (
    <div className='outline-none border-none w-full bg-slate-200 font-extralight text-[13px]'>
      <div
        className='px-3 py-1 rounded-r outline-none border-none flex justify-between bg-red-color text-white'
        style={{ width: `${number}%` }}
      >
        <p className='text-nowrap'>{title} </p>
        <p className='flex'>
          {number} <span>%</span>
        </p>
      </div>
    </div>
  );
};

export default Job;
