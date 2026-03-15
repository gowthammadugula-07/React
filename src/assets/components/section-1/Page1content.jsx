import { memo } from 'react';
import RightText from './Left';
import LeftText from './Right';

const Page1content = (props) => {
  return (
    <div className='pb-7 pt-3 h-[90vh] flex items-center gap-10  py-10'>
        <RightText/>
        <LeftText users={props.users} />
      
    </div>
  );
};

export default memo(Page1content);