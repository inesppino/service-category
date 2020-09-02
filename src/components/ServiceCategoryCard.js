import React, { Component } from "react";
import ServiceCategoryList from './ServiceCategoryList';

class ServiceCategoryCard extends Component {

  render() {
    const { lists, title } = this.props;
    return (
      <div className="card-container">
        <div className="card-title-container">
        <h2>{title}</h2>
        <button>Flecha</button>
        </div>
        <div className="card-lists-container">
          {Object.keys(lists).map((list) => {
            return (
              <ServiceCategoryList key={list} titleList={list} list={lists[list]} />
            );
          })}
        </div>
      </div>
    )
  }
}
export default ServiceCategoryCard;