import React from "react";

function Categories({categoryIndex, setCategoryIndex}) {
  
  const categorysList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {
          categorysList.map((categoryName, categoryId) => {
            return(
              <li className={(categoryIndex === categoryId) ? 'active' : ''} onClick={() => setCategoryIndex(categoryId)} key={categoryId}>{categoryName}</li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Categories;