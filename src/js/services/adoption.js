function AdoptionService ($http, SERVER) {

  this.listShelters = () => {
    return $http.get(`${SERVER}/shelters`);
  };

  this.addShelter = (data) => {
    return $http.post(`${SERVER}/shelters`, data);
  };

  this.getShelter = (id) => {
    return $http.get(`${SERVER}/shelters/${id}`);
  };

  this.addAnimal = (shelterId, data) => {
    var url = `${SERVER}/shelters/${shelterId}/animals`;
    return $http.post(url, data);
  };

};

AdoptionService.$inject = ['$http', 'SERVER'];

export default AdoptionService;
