import { ReactNode } from 'react';
import Divider from './Divider';
type SubTitlesProps = {
  titleleft?: string;
  titleright?: string;
  subTitle?: string;
  classleft?: string;
  classright?: string;
  classMidal?: string;
  children?: ReactNode;
  classDiv?: string;
  classTitle?: string;
  dr?: string;
};

const SubTitles = ({
  titleleft,
  titleright,
  classleft,
  classright,
  subTitle,
  classMidal,
  children,
  classDiv,
  classTitle,
 
}: SubTitlesProps) => {
  return (
    <div className={`flex flex-col ${classDiv}`}>
      <h5 className={classTitle}>
        <span className={`${classleft} pr-2`}>{titleleft}</span>
        {subTitle && (
          <span className={`${classMidal ? 'pr-3 ' : ''} ${classMidal} `}>
            {subTitle}
          </span>
        )}
        <span className={classright}>{titleright}</span>
      </h5>
      
        <Divider props='bg-red-color' />
      
      {children}
    </div>
  );
};

export default SubTitles;
