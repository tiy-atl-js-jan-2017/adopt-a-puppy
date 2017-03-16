function AnimalAddController ($scope, $http, $state, SERVER) {

  $scope.addPuppy = function (data, shelterId) {
    var url = `${SERVER}/shelters/${shelterId}/animals`;
    $http.post(url, data).then(resp => {
      $state.go('root.animals', { id: shelterId });
    });
  };

};

AnimalAddController.$inject = ['$scope', '$http', '$state', 'SERVER'];

export default AnimalAddController;
