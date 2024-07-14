import video from '../assets/video.mp4';
import { MdClose } from 'react-icons/md';

type VideoProps = {
  handleClickVideo: () => void;
  darkMode: boolean;
  setDarkMode: (e: boolean) => void;
};
const Video = ({ handleClickVideo, setDarkMode, darkMode }: VideoProps) => {
  return (
    <div className='relative  h-screen flex items-center justify-center'>
      <MdClose
        className=' text-white absolute right-4 top-4 text-[2rem] ease-in-out duration-1000'
        onClick={() => {
          handleClickVideo();
          setDarkMode(!darkMode);
        }}
      />
      <video
        className='w-full h-[650px] p-6'
        autoPlay
        muted
        playsInline
        controls
      >
        <source
          src={video}
          type='video/mp4'
        />
      </video>
    </div>
  );
};

export default Video;
