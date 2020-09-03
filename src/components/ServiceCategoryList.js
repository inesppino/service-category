import React, { Component } from "react";

class ServiceCategoryList extends Component {

  render() {
    const { list, titleList } = this.props;
    return (
      <div>
        <h3>{titleList}</h3>
      <ul>
        {list.map(category => {
          if(category.Caption.includes('(')){
            return (
            <li key={category.Id}>{category.Caption.split('(')[0]} <span>{'(' + category.Caption.split('(')[1]}</span></li>
            )
          } else {

          }
          return (<li key={category.Id}>{category.Caption}</li>)
        })}
      </ul>
      </div>
    )
  }
}

export default ServiceCategoryList;