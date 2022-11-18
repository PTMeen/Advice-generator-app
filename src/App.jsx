import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card';

function App() {
  const [advice, setAdvice] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getAdvice = async () => {
    setIsLoading(true);
    const { data } = await axios.get('https://api.adviceslip.com/advice');
    setAdvice(data.slip);
    setIsLoading(false);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <main>
      <Card {...advice} isLoading={isLoading} getAdvice={getAdvice} />
      <div className='attribution'>
        Challenge by
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by <a href='#'>PTMeen</a>.
      </div>
    </main>
  );
}

export default App;
