import { memo } from 'react';
import Section1 from './assets/components/section-1/Section1';


import Section2 from './assets/components/section-2/section2';

const App = () => {
  const users=[
    {

      img:'https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'blue',
      tag:'Satisified'
      
    },
    {img:'https://i.pinimg.com/736x/1b/54/7b/1b547bc0640ab730c3ba5ff99121b7f9.jpg',
      intro:'',
      color:'lightgreen',
      tag:'Underserved'},

      {img:'https://i.pinimg.com/736x/bb/f4/ee/bbf4eeedddd4b39d3b9418c878ece647.jpg',
      intro:'',
      color:'lightpink',
      tag:'underbanked'}
    ]
  return (
    <div>
      <Section1 users={users} />
      
      
    
      
    </div>
  );
};

export default memo(App);