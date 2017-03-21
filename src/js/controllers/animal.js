function AnimalController ($scope, $http, $stateParams, SERVER) {
  $scope.puppies = [];
  $scope.currentImg = "";

  $scope.setImg = function (photo) {
    $scope.currentImg = photo.photoUrl;
  };

  function init () {
    var shelterId = $stateParams.id;
    console.log(SERVER);
    var url = `${SERVER}/shelters/${shelterId}`;
    $http.get(url).then(resp => {
      $scope.puppies = resp.data.Animals;
    });
  }

  init();

}

AnimalController.$inject = ['$scope', '$http', '$stateParams', 'SERVER'];

export default AnimalController;
