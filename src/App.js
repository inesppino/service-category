import React, { Component } from 'react';
import './App.css';
import { fetchServiceCategory } from './services/serviceCategoryService';
import ServiceCategoryList from './components/ServiceCategoryList';

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

  componentDidMount(){

  }

  fetchCategories() {
    const serviceCategory = {};
    fetchServiceCategory.value.map(category => {
      if (!serviceCategory[category.ServiceCategory.Caption]) {
        return serviceCategory[category.ServiceCategory.Caption] = [];
      }
       return serviceCategory[category.ServiceCategory.Caption].push(category);
    });
    // this.setState({
    //   havelist: true,
    //   servicesCategories: {...serviceCategory}
    // })
    return serviceCategory
  }

  filterData(categories){
    const firstList = [];
    const secondList = [];
    console.log(categories)
    categories.map(cat => cat.Free ? firstList.push(cat) : secondList.push(cat));
    return {firstList, secondList};
  }

  render() {
    const categories = this.fetchCategories();
    const prueba = this.filterData(categories['Internet'])
    return (
      <React.Fragment>
        {/* <button onClick={this.fetchCategories}> {this.state.haveList} </button> */}
        <ServiceCategoryList categories = {this.filterData(categories['Internet'])}/>

      </React.Fragment>
    )
  }
}

export default App;
