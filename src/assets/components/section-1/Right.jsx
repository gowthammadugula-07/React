import { memo } from "react";
import RightCards from "./RightCards";
import 'remixicon/fonts/remixicon.css'

const LeftText = (props) => {
  return (
    <div  id='right' className="h-full flex overflow-x-auto flex-nowrap gap-10 w-3/4 p-4">
      {props.users.map(function(elem,idx){
        return <RightCards  color={elem.color}key={idx} id={idx}img={elem.img} tag={elem.tag}/>

      })}
    </div>
  );
};

export default memo(LeftText);