const SERVER_URL = "https://enigmatic-cliffs-77454.herokuapp.com";

function ShelterController ($scope, $http, $state) {
  console.log("Welcome to Shelter controller");
  $scope.shelters = [];

  function init () {
    $http.get(`${SERVER_URL}/shelters`).then(resp => {
      $scope.shelters = resp.data;
    });
  }

  init();

  $scope.addShelter = function (data) {
    $http.post(`${SERVER_URL}/shelters`, data).then(resp => {
      $state.go('home');
    });
  };
}

ShelterController.$inject = ['$scope', '$http', '$state'];

export default ShelterController;
