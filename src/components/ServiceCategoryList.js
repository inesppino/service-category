import React, { Component } from "react";

class ServiceCategoryList extends Component {

  render() {
    const { categories } = this.props;

    return (
      <ul>
        {categories['firstList'].map(category => {
          return (<li>{category.Caption}</li>)
        })}
      </ul>
    )
  }
}

export default ServiceCategoryList;