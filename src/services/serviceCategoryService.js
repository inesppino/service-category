const ENDPOINT = 'https://debug-api.fastpayhotels.net/DataService/EntityService.svc/ServiceType?$filter=(IdServiceCategory%20eq%202)%20or%20(IdServiceCategory%20eq%203)%20or%20(IdServiceCategory%20eq%205)&$format=json&$expand=ServiceCategory&$select=Id,Free,Caption,ServiceCategory/Id,ServiceCategory/Caption'

const fetchServiceCategory = () => fetch(ENDPOINT).then(response => response.json());

export { fetchServiceCategory }