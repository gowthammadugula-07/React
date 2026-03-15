import { memo } from 'react';

const HeroText = () => {
  return (
   
       <div className='p-5 ' ><h3 className='mb-5  text-5xl font-bold lea'>Prospective <br /><span >customer</span> <br />Segementation</h3>
       <p className='text-x1 font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo non quibusdam corporis sequi molestiae, natus quos adipisci iste fuga commodi aliquam eaque nisi modi nihil quis maiores reprehenderit accusantium quasi!</p>
       </div>
      
      
    
  );
};

export default memo(HeroText);