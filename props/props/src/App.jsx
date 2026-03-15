import { memo } from 'react';
import Card from './assets/components/card';

const App = () => {
  return (
  <div class="parent">
    
    <Card user="Gowtham" age={20}/>
    <Card user="Hello" age={20}/>
    </div>

  );
};

export default memo(App);