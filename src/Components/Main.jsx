import React from "react";
import { useSelector, useDispatch } from "react-redux";
import qs from 'qs';
import { useNavigate } from "react-router-dom";
import Categories from "./Categories";
import Sort from "./Sort";
import PizzaBlock from "./PizzaBlock";
import PizzaBlockEmpty from "./PizzaBlockEmpty";
import Pagination from "./Pagination";
import { setCategoryId, setSort, setPage, setCurrentPage } from "../redux/filterSlice";
import { fetchPizza } from "../redux/pizzaSlice";
import { sortList } from "./Sort";


function Main() {

  const {categoryId, sort, page, searchValue} = useSelector(state => state.filters);
  const {pizzas, status} = useSelector(state => state.pizza);

  const dispapth = useDispatch();
  const navigate = useNavigate();
  
  const searchUrlRef = React.useRef(false);
  const isMounted = React.useRef(false);
  const [itemsPage] = React.useState(3);


  const getPizzas = () => {
    const categoryUrl = (categoryId === 0) ? '' : `&category=${categoryId}`;
    const sortURL = `sortBy=${sort.type}&order=${sort.sort}`;
    const search = (searchValue !== '') ? `&search=${searchValue}` : '';
    const pages = `page=${page}&limit=${itemsPage}&`;

    dispapth(fetchPizza({
      categoryUrl,
      sortURL,
      search,
      pages
    }));
  }

  
  React.useEffect(() => {
    if(isMounted.current) {
      const queryString = qs.stringify({
        sortBy: sort.type,
        order: sort.sort,
        category: categoryId,
        page: page
      });
      navigate(`?${queryString}`);
    }

    isMounted.current = true;

  }, [categoryId, sort, searchValue, page]);


  React.useEffect(() => {
    if(window.location.search) {
      const urlParams = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((index) => (index.type === urlParams.sortBy && index.sort === urlParams.order));
      dispapth(
        setCurrentPage({
          categoryId: urlParams.category,
          sort,
          page: urlParams.page
        })
      );
      searchUrlRef.current = true;
    }
  }, []);  

  
  React.useEffect(() => {

    getPizzas();

  }, [categoryId, sort, searchValue, page]);

  React.useEffect(() => {
    dispapth(setPage(1));
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
          (status === 'loading') ? 
            <PizzaBlockEmpty />
            :
            pizzas.map((pizza, index) => {
              return ( 

                  <PizzaBlock key={index} {...pizza} />
              )
            })
        }
      </div>
      <Pagination namberItem={10} numberPage={page} itemsPage={itemsPage} />
    </div>
  );
}

export default Main;