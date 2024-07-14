import { useEffect, useState, useMemo } from 'react';

interface StatusProps {
  title: string;
  numberCl: string;
}

const StatusCarage = ({ title, numberCl }: StatusProps) => {
  const [nbr, setNbr] = useState<number>(0);
  const [nbr2, setNbr2] = useState<number>(0);

  const { nb1, nb2, totalSteps, intervalTime } = useMemo(() => {
    const nbrCl = parseInt(numberCl, 10);
    const maxTime = 3000;
    const intervalTime = 10; // Update interval in milliseconds

    let nb1 = nbrCl;
    let nb2 = 0;

    if (nbrCl >= 1000) {
      nb1 = nbrCl % 1000;
      nb2 = Math.floor(nbrCl / 1000);
    }

    const totalSteps = maxTime / intervalTime;
    return { nb1, nb2, totalSteps, intervalTime };
  }, [numberCl]);

  useEffect(() => {
    const incrementNbr1 = nb1 / totalSteps;
    const incrementNbr2 = nb2 / totalSteps;

    let currentNbr1 = 0;
    let currentNbr2 = 0;

    const intervalId = setInterval(() => {
      currentNbr1 += incrementNbr1;
      currentNbr2 += incrementNbr2;

      setNbr(Math.min(Math.floor(currentNbr1), nb1));
      setNbr2(Math.min(Math.floor(currentNbr2), nb2));

      if (currentNbr1 >= nb1 && currentNbr2 >= nb2) {
        clearInterval(intervalId);
      }
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [nb1, nb2, totalSteps, intervalTime]);

  const suffix =
    title === 'CLIENT SATISFACTION'
      ? ' %'
      : title === 'AUTOMOBILES & TRUCKS REPAIRED'
      ? '+'
      : '';

  return (
    <div className=' flex  md:flex-row  justify-around items-center  md:justify-between  gap-4 py-8 md:py-0 md:gap-4'>
      <span className='text-text-color/60 text-5xl font-thin md:text-nowrap'>
        {nbr2 > 0 ? `${nbr2}, ${nbr}` : `${nbr}`}
        {suffix}
      </span>
      <h5 className='text-xl text-balance font-light w-48'>{title}</h5>
    </div>
  );
};

export default StatusCarage;
