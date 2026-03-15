import { memo } from 'react';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-3 px-16 '>
      <h4 className='bg-black  text-white  uppercase py-2 px-6 rounded-full text-xs'>Target Audience</h4>
      <button className='bg-gray-50 px-6 py-2 uppercase rounded-full text-xs'>digital Banking platform</button>
    </div>
  );
};

export default memo(Navbar);