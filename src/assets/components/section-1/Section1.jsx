import { memo } from 'react';
import Navbar from './Navbar';
import Page1content from './Page1content';

const Section1 = (props) => {
  return (
    <div className='w-full  bg-white'>
      <Navbar />
      
            <Page1content users={props.users} />
    </div>
  );
};

export default memo(Section1);