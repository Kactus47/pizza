import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Categories from "./Categories";
import Sort from "./Sort";
import PizzaBlock from "./PizzaBlock";
import PizzaBlockEmpty from "./PizzaBlockEmpty";
import Pagination from "./Pagination";
import { SerachContext } from "../App";
import { setCategoryId, setSort } from "../redux/filterSlice";

function Main() {

  const {searchValue} = React.useContext(SerachContext);
  
  const {categoryId, sort} = useSelector(state => state.filters);
  const dispapth = useDispatch();



  const [pizzas, setPizzas] = React.useState([]);
  const [isPizzaLoading, setIsPizzaLoading] = React.useState(false);


  const [itemsPage] = React.useState(4);
  const [numberPage, setNumberPage] = React.useState(1)
  const changePage = (number) => setNumberPage(number);

  const categoryUrl = (categoryId === 0) ? '' : `&category=${categoryId}`;
  const sortURL = `sortBy=${sort.type}&order=${sort.sort}`;
  const search = (searchValue !== '') ? `&search=${searchValue}` : '';
  const pages = `page=${numberPage}&limit=${itemsPage}&`

  React.useEffect(() => {
    setIsPizzaLoading(false);
    fetch(`https://62a86fadec36bf40bda5a999.mockapi.io/pizzas?${pages}${sortURL}${categoryUrl}${search}`)
    .then(response => response.json())
    .then((pizzas) => {
      setPizzas(pizzas);
      setTimeout(() => {
        setIsPizzaLoading(true);
      }, 1000);
    });
  }, [categoryId, sort, searchValue, numberPage]);

  React.useEffect(() => {
    setNumberPage(1);
  }, [categoryId, sort, searchValue]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryIndex={categoryId} setCategoryIndex={(i) => dispapth(setCategoryId(i))} />
        <Sort sortCheck={sort} setSortCheck={(obj) => dispapth(setSort(obj))} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
            pizzas.map((pizza, index) => {
              return ( 
                (!isPizzaLoading) ? 
                  <PizzaBlockEmpty key={index} /> :
                  <PizzaBlock key={index} {...pizza} />
              )
            })
        }
      </div>
      <Pagination changePage={changePage} namberItem={10} numberPage={numberPage} itemsPage={itemsPage} />
    </div>
  );
}

export default Main;