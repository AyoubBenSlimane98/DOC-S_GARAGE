type ArticlePrpos = {
    title: string;
}

const Article = ({ title }: ArticlePrpos) => {
  return (
    <div className='flex flex-col gap-2 px-6 pb-6'>
      <h5 className='text-[1.9rem] font-medium leading-9 '> {title} </h5>
      <p className='text-gray-400 text-[12px] font-extralight py-2'>JANUARY 7, 2024 NO COMMENTS</p>
      <p className='text-justify leading-relaxed font-light'>
        Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Integer posuere erat a ante venenatis
        dapibus posuere velit aliquet. Vestibulum id
      </p>
      <p className='text-red-color cursor-pointer text-[15px] py-1'>
        READ MORE
      </p>
    </div>
  );
};

export default Article;
