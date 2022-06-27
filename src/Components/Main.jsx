import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../redux/pagerSlice";
import Categories from "./Categories";
import Sort from "./Sort";
import PizzaBlock from "./PizzaBlock";
import PizzaBlockEmpty from "./PizzaBlockEmpty";
import Pagination from "./Pagination";
import { SerachContext } from "../App";
import { setCategoryId, setSort } from "../redux/filterSlice";
import axios from 'axios';

function Main() {

  const {searchValue} = React.useContext(SerachContext);

  const {categoryId, sort} = useSelector(state => state.filters);
  const {curentPage} = useSelector(state => state.pager);
  const dispapth = useDispatch();

  const [pizzas, setPizzas] = React.useState([]);
  const [isPizzaLoading, setIsPizzaLoading] = React.useState(false);


  const [itemsPage] = React.useState(3);

  const categoryUrl = (categoryId === 0) ? '' : `&category=${categoryId}`;
  const sortURL = `sortBy=${sort.type}&order=${sort.sort}`;
  const search = (searchValue !== '') ? `&search=${searchValue}` : '';
  const pages = `page=${curentPage.payload}&limit=${itemsPage}&`

  React.useEffect(() => {
    setIsPizzaLoading(false);
    axios.get(`https://62a86fadec36bf40bda5a999.mockapi.io/pizzas?${pages}${sortURL}${categoryUrl}${search}`)
      .then(pizzas => {
        setPizzas(pizzas.data);
        setTimeout(() => {
          setIsPizzaLoading(true);
        }, 1000);
      })
  }, [categoryId, sort, searchValue, curentPage.payload]);

  React.useEffect(() => {
    dispapth(changePage(1));
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
      <Pagination namberItem={10} numberPage={curentPage.payload} itemsPage={itemsPage} />
    </div>
  );
}

export default Main;