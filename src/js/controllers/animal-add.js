function AnimalAddController ($scope, $state, AdoptionService) {

  $scope.addPuppy = function (data, shelterId) {
    AdoptionService.addAnimal(shelterId, data).then(resp => {
      $state.go('root.animals', { id: shelterId });
    });
  };

};

AnimalAddController.$inject = ['$scope', '$state', 'AdoptionService'];

export default AnimalAddController;
