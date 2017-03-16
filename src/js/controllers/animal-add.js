function AnimalAddController ($scope, $http, $state, SERVER, $cookies) {

  $scope.addPuppy = function (data, shelterId) {
    var url = `${SERVER}/shelters/${shelterId}/animals`;
    $http({
      url: url,
      method: 'POST',
      headers: {
        'access-token': $cookies.get('access-token')
      },
      data: data
    }).then(resp => {
      $state.go('root.animals', { id: shelterId });
    });
  };

};

AnimalAddController.$inject = ['$scope', '$http', '$state', 'SERVER', '$cookies'];

export default AnimalAddController;
