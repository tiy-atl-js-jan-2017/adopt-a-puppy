function AdoptionService ($http, SERVER) {

  let service = this;

  service.listShelters = listShelters;
  service.addShelter = addShelter;
  service.getShelter = getShelter;
  service.addAnimal = addAnimal;

  function listShelters () {
    return $http.get(`${SERVER}/shelters`);
  };

  function addShelter (data) {
    return $http.post(`${SERVER}/shelters`, data);
  };

  function getShelter (id) {
    return $http.get(`${SERVER}/shelters/${id}`);
  };

  function addAnimal (shelterId, data) {
    var url = `${SERVER}/shelters/${shelterId}/animals`;
    return $http.post(url, data);
  };

};

AdoptionService.$inject = ['$http', 'SERVER'];

export default AdoptionService;
