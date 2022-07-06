import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PrizzaFullPage: React.FC = () => {
  const {id} = useParams();
  const [currentPizza, setCurrentPizza] = React.useState<{
    title: string,
    imageUrl: string,
    price: number,
  }>({
    title: '',
    imageUrl: '',
    price: 0,
  });

  React.useEffect(() => {
    const fetchCurrentPizza = async () => {
      try {
        const {data} = await axios.get(`https://62a86fadec36bf40bda5a999.mockapi.io/pizzas/${id}`);
        setCurrentPizza(data);
      } catch(error) {
        console.log(error);
      }
    }
    fetchCurrentPizza();
  }, []);


  return (
    <div className="container">
      <h1>{currentPizza.title}</h1>
      <img src={currentPizza.imageUrl} alt="" />
      <div>{currentPizza.price} руб.</div>
    </div>
  );
}

export default PrizzaFullPage;