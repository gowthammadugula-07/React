import { memo } from 'react';

const Rightcardcontent = (props) => {
  return (
    <div>
      <div className=' absolute left-0 top-0 w-full h-full p-6 flex flex-col justify-between'>
        <h2 className='bg-amber-50 text-xl font-semibold rounded-full flex items-center justify-center w-10 h-10'>{props.id+1}</h2>
        <div>
          <p className='text-lg leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dicta, deserunt facere ratione amet a.</p>
          <div className='flex'>
            <button style={{background:props.color}} className=' font-medium text-amber-50 rounded-full px-6 py-2'>{props.tag}</button>
          <button style={{background:props.color}} className='font-medium text-amber-50 rounded-full px-3 py-2'><i class="ri-arrow-right-line"></i></button>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default memo(Rightcardcontent);