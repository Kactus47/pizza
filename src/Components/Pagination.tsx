import React from "react";
import { setPage } from "../redux/filterSlice";
import { useDispatch } from "react-redux";

type PaginationProps = {
  namberItem: number;
  itemsPage: number;
  numberPage: number;
}

const Pagination: React.FC<PaginationProps> = ({namberItem, itemsPage, numberPage}) => {
  const dispapth = useDispatch();
  const pager: number[] = [];

  for(let i: number = 0; i < Math.ceil(namberItem / itemsPage); i++) {
    pager.push(i);
  }

  return(
    <ul className="pagination">
      {
        pager.map(number => (
          <li className={(number + 1 === numberPage) ? 'active' : ''} onClick={() => dispapth(setPage(number + 1))} key={number + 1}>
            <span>{number + 1}</span>
          </li>
        )) 
      }
    </ul>
  );
}

export default Pagination;