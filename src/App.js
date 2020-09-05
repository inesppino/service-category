import React from 'react';
import './App.scss';
import { ENDPOINTSERVICES } from './services/serviceCategoryService';
import { useHttp } from './hooks/http';
import ServiceCategoryCard from './components/ServiceCategoryCard';

const App = () => {
  const [fetchedData, isLoading] = useHttp(ENDPOINTSERVICES, []);

  let content = <p>Loading...</p>

  const servicesCategories = {};

  const arrangedData = () => {
    fetchedData.value.map(category => {
      if (!servicesCategories[category.ServiceCategory.Id]) {
        return servicesCategories[category.ServiceCategory.Id] = [];
      }
      return servicesCategories[category.ServiceCategory.Id].push(category);
    });
  };

  const filterData = (categories) => {
    const Free = [];
    const Extra = [];
    categories.map(cat => cat.Free ? Free.push(cat) : Extra.push(cat));
    return { Free, Extra };
  };

  if (!isLoading && fetchedData) {
    arrangedData();
    content =
      <ul className="service-category-main-list">
        {Object.keys(servicesCategories).map((category, index) => {
          return (
            <ServiceCategoryCard key={category}
              id={category}
              lists={filterData(servicesCategories[category])}
              title={servicesCategories[category][0].ServiceCategory.Caption}
              collapsibleControl={index === 0 ? true : false}
            />
          )
        })}
      </ul>;
  };
  return (content);
}

export default App;
