import { memo } from 'react';

const Card = (props) => {
  console.log(props)
  return (
    <div>
      <div class="card">
      <img src="https://images.unsplash.com/photo-1772289326062-f464af34b783?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1>{props.user}</h1>
    </div>
    </div>
  );
};

export default memo(Card);