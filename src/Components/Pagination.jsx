import { setPage } from "../redux/filterSlice";
import { useDispatch } from "react-redux";

function Pagination ({namberItem, itemsPage, numberPage}) {
  const dispapth = useDispatch();
  const pager = [];

  for(let i = 0; i < Math.ceil(namberItem / itemsPage); i++) {
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