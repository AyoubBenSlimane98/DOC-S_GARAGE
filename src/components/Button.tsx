import { CSSProperties, ElementType } from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa6';

type ButtonProps = {
  Icon: ElementType;
  style?: CSSProperties;
};

const Button = ({ Icon, style }: ButtonProps) => {
  const getBorderColorClass = (Icon: ElementType) => {
    if (Icon === FaFacebook || Icon === FaTwitter) {
      return 'hover:border-blue-600';
    }
    if (Icon === FaYoutube) {
      return 'hover:border-red-600';
    }
    if (Icon === FaInstagram) {
      return 'hover:border-pink-500';
    }
    return '';
  };

  const getTextColorClass = (Icon: ElementType) => {
    if (Icon === FaFacebook || Icon === FaTwitter) {
      return 'hover:text-blue-600';
    }
    if (Icon === FaYoutube) {
      return 'hover:text-red-600';
    }
    if (Icon === FaInstagram) {
      return 'hover:text-pink-500';
    }
    return '';
  };

  return (
    <button
      className={`w-8 h-8 border ease-in-out duration-200  border-black rounded-full flex justify-center items-center cursor-pointer  ${getBorderColorClass( Icon)} ${getTextColorClass(Icon)}`}
      style={style}
    >
      <Icon
        className={`text-xl   }`}
      />
    </button>
  );
};

export default Button;
