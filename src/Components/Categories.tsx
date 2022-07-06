import React from "react";

type CategoryProps = {
  categoryIndex: number;
  setCategoryIndex: (i: number) => void;
}

const Categories: React.FC<CategoryProps> = ({categoryIndex, setCategoryIndex}) => {
  
  const categorysList: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

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