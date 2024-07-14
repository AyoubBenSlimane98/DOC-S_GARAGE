type FooterProps = {
  title: string;
  data: string[];
};

const FooterBar = ({ data, title }: FooterProps) => {
  return (
    <div className=' flex flex-col gap-4'>
      <h5 className=' text-black-color text-[1.3125rem] font-bold'>
        {' '}
        {title}{' '}
      </h5>
      <ul>
        {data.map((item) => (
          <li
            key={item}
            className='py-1 hover:text-red-color cursor-pointer duration-200 text-[1rem] font-extralight text-gray-600'
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterBar;
