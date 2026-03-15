import { memo } from 'react';
import HeroText from './HeroText';
import Arrow from './Arrow';

const RightText = () => {
  return (
     <div className='h-full flex flex-col justify-between w-1/3'>
      <HeroText />
      <Arrow />

    </div>
  
      
  
  );
};

export default memo(RightText);