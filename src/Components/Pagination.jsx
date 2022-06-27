function Pagination ({namberItem, itemsPage, changePage, numberPage}) {

  const pager = [];

  for(let i = 0; i < Math.ceil(namberItem / itemsPage); i++) {
    pager.push(i);
  }

  return(
    <ul className="pagination">
      {
        pager.map(number => (
          <li className={(number + 1 === numberPage) ? 'active' : ''} onClick={() => changePage(number + 1)} key={number + 1}>
            <span>{number + 1}</span>
          </li>
        )) 
      }
    </ul>
  );
}

export default Pagination;