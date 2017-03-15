const SERVER_URL = "https://enigmatic-cliffs-77454.herokuapp.com";

function AnimalController ($scope, $http, $stateParams) {
  $scope.currentPuppy = null;
  $scope.puppies = [];

  function init () {
    var shelterId = $stateParams.id;
    var url = `${SERVER_URL}/shelters/${shelterId}`;
    $http.get(url).then(resp => {
      $scope.puppies = resp.data;
    });
  }

  init();

}

AnimalController.$inject = ['$scope', '$http', '$stateParams'];

export default AnimalController;
