import React, { useState } from "react";
import ServiceCategoryList from './ServiceCategoryList';

const ServiceCategoryCard = props => {
  const { lists, title, collapsibleControl } = props;
  const [isActive, setActive] = useState(collapsibleControl);

  return (
    <div className={`card-container ${isActive ? '' : 'inactive-collapsible'}`}>
      <div className="card-title-container">
        <h2>{title}</h2>
        <button onClick={() => setActive(!isActive)}><i className="fas fa-angle-up icon-up"></i></button>
      </div>
      <div className={`card-lists-container ${isActive ? '' : 'inactive-collapsible'}`} id={title}>
        {Object.keys(lists).map((list) => {
          return (
            <ServiceCategoryList key={list} titleList={list} list={lists[list]} />
          );
        })}
      </div>
    </div>
  )
};

export default ServiceCategoryCard;