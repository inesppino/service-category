import React, { Component } from "react";
import ServiceCategoryList from './ServiceCategoryList';

class ServiceCategoryCard extends Component {

  render() {
    const { lists, title, handleCollapsible, id, collapsibleControl } = this.props;

    return (
      <div className={`card-container ${collapsibleControl}`}>
        <div className="card-title-container">
          <h2>{title}</h2>
          <button onClick={() => handleCollapsible(id)}><i className="fas fa-angle-up icon-up"></i></button>
        </div>
        <div className="card-lists-container" id={title}>
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