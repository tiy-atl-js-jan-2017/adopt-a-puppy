function UserController ($scope, $http, SERVER) {
  $scope.notifications = [];

  $scope.removeMsg = (msg) => {
    var removed = $scope.notifications.filter(x => x != msg);
    $scope.notifications = removed;
  };

  $scope.signUp = (user) => {
    $http.post(`${SERVER}/users`, user).then(resp => {
      var message = `Created new user: ${resp.data.name}`;
      $scope.notifications.push(message);
    }).catch(error => {
      console.log(error);
    });
  };

}

UserController.$inject = ['$scope', '$http', 'SERVER'];

export default UserController;
