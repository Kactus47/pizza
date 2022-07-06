import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PrizzaFullPage () {
  const {id} = useParams();
  const [currentPizza, setCurrentPizza] = React.useState({});

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
  const { title, imageUrl, price} = currentPizza;

  return (
    <div className="container">
      <h1>{title}</h1>
      <img src={imageUrl} alt="" />
      <div>{price} руб.</div>
    </div>
  );
}

export default PrizzaFullPage;