function ShelterController ($scope, $state, AdoptionService) {
  $scope.shelters = [];

  function init () {
    AdoptionService.listShelters().then(resp => {
      $scope.shelters = resp.data;
    });
  }

  init();

  $scope.addShelter = function (data) {
    AdoptionService.addShelter(data).then(resp => {
      $state.go('root.home');
    });
  };
}

ShelterController.$inject = ['$scope', '$state', 'AdoptionService'];

export default ShelterController;
