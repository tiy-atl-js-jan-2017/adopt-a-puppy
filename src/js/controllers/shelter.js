const SERVER_URL = "https://enigmatic-cliffs-77454.herokuapp.com";

function ShelterController ($scope, $http) {
  console.log("Welcome to Shelter controller");
  $scope.currentShelter = null;

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
