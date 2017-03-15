const SERVER_URL = "https://enigmatic-cliffs-77454.herokuapp.com";

function ShelterController ($scope, $http) {
  console.log("Welcome to Shelter controller");
  $scope.currentShelter = null;
  $scope.shelters = [];

  function init () {
    $http.get(`${SERVER_URL}/shelters`).then(resp => {
      $scope.shelters = resp.data;
    });
  }

  init();

  $scope.addShelter = function (data) {
    // console.log(shelter);

    $http.post(`${SERVER_URL}/shelters`, data).then(resp => {
      console.log(resp.data);
      $scope.currentShelter = resp.data;
    });
  };
}

ShelterController.$inject = ['$scope', '$http'];

export default ShelterController;
