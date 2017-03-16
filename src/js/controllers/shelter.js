function ShelterController ($scope, $http, $state, SERVER) {
  $scope.shelters = [];

  function init () {
    $http.get(`${SERVER}/shelters`).then(resp => {
      $scope.shelters = resp.data;
    });
  }

  init();

  $scope.addShelter = function (data) {
    $http.post(`${SERVER}/shelters`, data).then(resp => {
      $state.go('root.home');
    });
  };
}

ShelterController.$inject = ['$scope', '$http', '$state', 'SERVER'];

export default ShelterController;
