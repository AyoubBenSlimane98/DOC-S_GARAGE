import { useState, useEffect } from 'react';

type ImageSliderProps = {
  imageURL: string[];
};

const ImageSlider = ({ imageURL }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageURL.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [imageURL]);
  const rotatedImages = [
    ...imageURL.slice(currentIndex),
    ...imageURL.slice(0, currentIndex),
  ];
  return (
    <div className=' flex gap-10 items-center justify-between sm:w-[max-content] md:w-full '>
      {rotatedImages.map((img, index) => (
        <img
          src={img}
          key={index}
          className='flex-shrink-0 h-[64px]  md:h-[44px] transition-transform ease-in-out duration-1000 '
          alt={`slide-${index}`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
