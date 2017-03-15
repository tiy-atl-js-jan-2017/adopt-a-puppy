const SERVER_URL = "https://enigmatic-cliffs-77454.herokuapp.com";

function AnimalAddController ($scope, $http, $state) {

  $scope.addPuppy = function (data, shelterId) {
    var url = `${SERVER_URL}/shelters/${shelterId}/animals`;
    $http.post(url, data).then(resp => {
      $state.go('animals', { id: shelterId });
    });
  };

};

AnimalAddController.$inject = ['$scope', '$http', '$state'];

export default AnimalAddController;
