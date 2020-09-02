import React, { Component } from 'react';
import './App.scss';
import { fetchServiceCategory } from './services/serviceCategoryService';
import ServiceCategoryCard from './components/ServiceCategoryCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haveList: false,
      servicesCategories: {}
    }
    this.fetchCategories = this.fetchCategories.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  fetchCategories() {
    const serviceCategory = {};
    fetchServiceCategory.value.map(category => {
      if (!serviceCategory[category.ServiceCategory.Id]) {
        return serviceCategory[category.ServiceCategory.Id] = [];
      }
       return serviceCategory[category.ServiceCategory.Id].push(category);
    });
    // this.setState({
    //   havelist: true,
    //   servicesCategories: {...serviceCategory}
    // })
    return serviceCategory
  }

  filterData(categories){
    const Free = [];
    const Extra = [];
    categories.map(cat => cat.Free ? Free.push(cat) : Extra.push(cat));
    return {Free, Extra};
  }

  render() {
    const categories = this.fetchCategories();
    return (
      <React.Fragment>
        <ServiceCategoryCard lists={this.filterData(categories['2'])} title='Internet'/>
        <ServiceCategoryCard lists={this.filterData(categories['3'])} title='Services'/>
        <ServiceCategoryCard lists={this.filterData(categories['5'])} title='Services Sport'/>
      </React.Fragment>
    )
  }
}

export default App;
