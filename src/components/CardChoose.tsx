import { CardChooseProps } from '../data/Proudct';

const CardChoose = ({ Icon, isActive, title }: CardChooseProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-[267px] lg:h-[300px] duration-300 text-center ease-in-out  gap-3 lg:rounded lg:shadow-red-900 p-6 ${
        isActive
          ? 'bg-red-color'
          : 'bg-white hover:bg-red-color hover:text-white'
      }`}
    >
      <div
        className={`w-[70px] h-[70px] rounded-full flex justify-center items-center ${
          isActive ? 'bg-white' : 'bg-red-color'
        }`}
      >
        <Icon
          className={`${
            isActive ? 'text-slate-700' : 'text-white'
          } text-[1.8rem] `}
        />
      </div>
      <p
        className={`${
          isActive ? 'text-white-color' : ' '
        } text-[2rem] md:text-[1.6rem] text-wrap font-semibold `}
      >
        {title}
      </p>
      <p
        className={`${
          isActive ? 'text-light-dark' : 'text-gray-text-second '
        } font-extralight`}
      >
        Lorem ipsum dolor sit ament
      </p>
    </div>
  );
};

export default CardChoose;
