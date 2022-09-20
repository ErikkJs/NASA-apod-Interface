import { useEffect, useState } from 'react';
import Card from './components/Card';
const axios = require('axios').default;

function App() {
  // todays date
  const [date, setDate] = useState('2020-10-10');
  const [count, setCount] = useState(10);
  const [data, setData] = useState([]);

  const fetchAPODbyCount = async (count) => {
    try {
      const result = await axios.get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key: '77g2BvJPcmMeghQqD4mwCgWF96oVvsxRlf0HQoAJ',
          count,
        },
      });

      setData(result.data);
    } catch (error) {
      console.log(error);
      setData([]);
    }
  };

  useEffect(() => {
    fetchAPODbyCount(count);
    console.log(data);
  }, [count]);

  return (
    <div className="w-full p-5">
      <div className="p-5">
        <input type="date" name="date-picker"></input>
      </div>{' '}
      <h1 className="text-3xl font-bold w-full text-center">APOD Client</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {data &&
          data.map((apod) => {
            return <Card data={apod} key={apod.title} />;
          })}
      </div>
    </div>
  );
}

export default App;
