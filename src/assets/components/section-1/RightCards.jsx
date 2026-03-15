import { memo } from 'react';
import Rightcardcontent from './Rightcardcontent';

const RightCards = (props) => {
  return (
    <div className=' h-full shrink-0 w-1/3 rounded-4xl  relative overflow-hidden' >
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <Rightcardcontent color={props.color} id={props.id}tag={props.tag}/>
    </div>
    
  );
};

export default memo(RightCards);