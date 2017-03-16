function AnimalController ($scope, $http, $stateParams, SERVER) {
  $scope.puppies = [];

  function init () {
    var shelterId = $stateParams.id;
    console.log(SERVER);
    var url = `${SERVER}/shelters/${shelterId}`;
    $http.get(url).then(resp => {
      $scope.puppies = resp.data;
    });
  }

  init();

}

AnimalController.$inject = ['$scope', '$http', '$stateParams', 'SERVER'];

export default AnimalController;
