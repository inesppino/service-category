import React from "react";

const ServiceCategoryList = props => {
  const { list, titleList } = props;
  return (
    <div>
      <h3>{titleList}</h3>
      <ul>
        {list.map(category => {
          if (category.Caption.includes('(')) {
            return (
              <li key={category.Id}>{category.Caption.split('(')[0]} <span>{'(' + category.Caption.split('(')[1]}</span></li>
            )
          } else {
            return (<li key={category.Id}>{category.Caption}</li>)
          }
        })}
      </ul>
    </div>
  )
};

export default ServiceCategoryList;