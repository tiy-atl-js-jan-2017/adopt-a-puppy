function AnimalController ($scope, $stateParams, AdoptionService) {
  $scope.puppies = [];
  $scope.currentImg = "";

  $scope.setImg = function (photo) {
    $scope.currentImg = photo.photoUrl;
  };

  function init () {
    AdoptionService.getShelter($stateParams.id).then(resp => {
      $scope.puppies = resp.data.Animals;
    });
  }

  init();

}

AnimalController.$inject = ['$scope', '$stateParams', 'AdoptionService'];

export default AnimalController;
