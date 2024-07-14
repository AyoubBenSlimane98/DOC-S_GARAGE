
interface CardProps {
  title: string;
  subTitle: string;
  img: string;
  className?: string;
}
const Card = ({ title, subTitle, img, className }: CardProps) => {
  return (
    <div className={`relative  group ${className}`}>
      <img
        src={img}
        alt=''
        className={` w-full  object-cover ${
          className ? 'h-[560px]' : 'h-[276px]  '
        }`}
      />
      <div className=' absolute text-light-second-color text-3xl p-9 z-50 bottom-2 opacity-0 group-hover:opacity-100'>
        <h5> {title} </h5>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default Card;
