import React, { Component } from 'react';
import './App.scss';
import { fetchServiceCategory } from './services/serviceCategoryService';
import ServiceCategoryCard from './components/ServiceCategoryCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesCategories: {},
      collapsibles: {},
    }
    this.handleCollapsible = this.handleCollapsible.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    const serviceCategory = {};
    fetchServiceCategory().then(data => {
      data.value.map(category => {
        if (!serviceCategory[category.ServiceCategory.Id]) {
          return serviceCategory[category.ServiceCategory.Id] = [];
        }
        return serviceCategory[category.ServiceCategory.Id].push(category);
      });
      this.setState({
        servicesCategories: { ...serviceCategory },
      }, this.createCollapsiblesHandlers
      );
    });
    return serviceCategory;
  }

  createCollapsiblesHandlers() {
    const { servicesCategories } = this.state;
    const collapsibles = {};
    Object.keys(servicesCategories).forEach((category, index) => {
      index === 0 ? collapsibles[category] = '' : collapsibles[category] = 'inactive-collapsible';
    })
    this.setState({
      collapsibles
    })
    return collapsibles;
  }

  filterData(categories) {
    const Free = [];
    const Extra = [];
    categories.map(cat => cat.Free ? Free.push(cat) : Extra.push(cat));
    return { Free, Extra };
  }

  handleCollapsible(id) {
    const collapsibles = { ...this.state.collapsibles };
    collapsibles[id] === '' ? collapsibles[id] = 'inactive-collapsible' : collapsibles[id] = '';
    this.setState({
      collapsibles
    })
  }

  render() {
    const { servicesCategories, collapsibles } = this.state;
    return (
      <ul className="service-category-main-list">
        {Object.keys(servicesCategories).map(category => {
          return (
            <ServiceCategoryCard key={category}
              id={category}
              lists={this.filterData(servicesCategories[category])}
              title={servicesCategories[category][0].ServiceCategory.Caption}
              handleCollapsible={this.handleCollapsible}
              collapsibleControl={collapsibles[category]}
            />)
        })}
      </ul>
    )
  }
}

export default App;
