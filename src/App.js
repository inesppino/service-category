import React, { Component } from 'react';
import './App.scss';
import { fetchServiceCategory } from './services/serviceCategoryService';
import ServiceCategoryCard from './components/ServiceCategoryCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesCategories: {},
      collapsibles: {}
    }
    this.fetchCategories = this.fetchCategories.bind(this);
    this.filterData = this.filterData.bind(this);
    this.handleCollapsible = this.handleCollapsible.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
    this.createCollapsiblesHandelers();
  }

  fetchCategories() {
    const serviceCategory = {};
    fetchServiceCategory.value.map(category => {
      if (!serviceCategory[category.ServiceCategory.Id]) {
        return serviceCategory[category.ServiceCategory.Id] = [];
      }
      return serviceCategory[category.ServiceCategory.Id].push(category);
    });
    this.setState({
      servicesCategories: { ...serviceCategory }
    })
    return serviceCategory
  }

  createCollapsiblesHandelers() {
    console.log('he pasado')
    console.log(this.state.servicesCategories)
    // necesito el this.state.servicesCategories para crear el objeto de collapsibles
  }

  filterData(categories) {
    const Free = [];
    const Extra = [];
    categories.map(cat => cat.Free ? Free.push(cat) : Extra.push(cat));
    return { Free, Extra };
  }

  handleCollapsible(e) {
    console.log(e);
  }

  render() {
    const { servicesCategories } = this.state;
    return (
      <ul>
        {Object.keys(servicesCategories).map(category => {
          return (
            <ServiceCategoryCard key={servicesCategories[category][0].Id}
              id={servicesCategories[category][0].Id}
              lists={this.filterData(servicesCategories[category])}
              title={servicesCategories[category][0].ServiceCategory.Caption} 
              handleCollapsible={this.handleCollapsible}
            />)
        })}
      </ul>
    )
  }
}

export default App;
