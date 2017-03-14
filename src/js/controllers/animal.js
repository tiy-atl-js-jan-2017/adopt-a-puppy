const SERVER_URL = "https://enigmatic-cliffs-77454.herokuapp.com";

function AnimalController ($scope, $http) {
  console.log("Welcome to Animal controller");
  $scope.currentPuppy = null;
  $scope.puppies = [];

  function init () {
    $http.get(`${SERVER_URL}/shelters/1`).then(resp => {
      $scope.puppies = resp.data;
    });
  }

  init();

  $scope.addPuppy = function (data, shelterId) {
    var url = `${SERVER_URL}/shelters/${shelterId}/animals`;
    $http.post(url, data).then(resp => {
      console.log(resp.data);
      $scope.currentPuppy = resp.data;
      $scope.puppies.push(resp.data);
    });
  };


}

AnimalController.$inject = ['$scope', '$http'];

export default AnimalController;
