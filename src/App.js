import React, { useState, useEffect } from 'react';
import './App.scss';
import { ENDPOINTSERVICES } from './services/serviceCategoryService';
import { useHttp } from './hooks/http';

import ServiceCategoryCard from './components/ServiceCategoryCard';

const App = props => {
  const [fetchedData, isLoading] = useHttp(ENDPOINTSERVICES, []);
  const [collapsibles, setCollapsibles] = useState(null);
  const [servicesCategories, setServicesCategories] = useState(null)

  let content = <p>Loading...</p>
  
  const arrangedData = () => {
    const arrangedObject = {};
    fetchedData.value.map(category => {
      if (!arrangedObject[category.ServiceCategory.Id]) {
        return arrangedObject[category.ServiceCategory.Id] = [];
      }
      return arrangedObject[category.ServiceCategory.Id].push(category);
    });
    setServicesCategories(arrangedObject);
  }

  const createCollapsiblesHandlers = () => {
    const newCollapsibles = {};
    Object.keys(servicesCategories).forEach((category, index) => {
      index === 0 ? newCollapsibles[category] = '' : newCollapsibles[category] = 'inactive-collapsible';
    })
    setCollapsibles(newCollapsibles);
  }

  const filterData = (categories) => {
    const Free = [];
    const Extra = [];
    categories.map(cat => cat.Free ? Free.push(cat) : Extra.push(cat));
    return { Free, Extra };
  }

  const handleCollapsible = (id) => {
    // const collapsibles = { ...this.state.collapsibles };
    collapsibles[id] === '' ? collapsibles[id] = 'inactive-collapsible' : collapsibles[id] = '';
    setCollapsibles(collapsibles);
    console.log(id)
    console.log(collapsibles)
  }

  if (!isLoading && fetchedData && !servicesCategories) {
    arrangedData();
  } else if(servicesCategories && !collapsibles) {
    createCollapsiblesHandlers();
  }
  else if (collapsibles) {
    content =
    <ul className="service-category-main-list">
      {Object.keys(servicesCategories).map(category => {
        return (
          <ServiceCategoryCard key={category}
            id={category}
            lists={filterData(servicesCategories[category])}
            title={servicesCategories[category][0].ServiceCategory.Caption}
            handleCollapsible={handleCollapsible}
            collapsibleControl={collapsibles[category]}
          />
          )
      })}
    </ul>;
  }
  return (content)
}

export default App;
