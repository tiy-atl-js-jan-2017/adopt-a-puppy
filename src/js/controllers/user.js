function UserController ($scope, $http, SERVER, $cookies, $state) {
  $scope.notifications = [];

  console.log($cookies);

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

  $scope.signIn = (user) => {
    $http.post(`${SERVER}/login`, user).then(resp => {
      console.log(resp.data);
      $cookies.put('access-token', resp.data.token);
      $state.go('root.home');
    }).catch(error => {
      console.log(error);
      $scope.notifications.push(error.data.message);
    });
  };

}

UserController.$inject = ['$scope', '$http', 'SERVER', '$cookies', '$state'];

export default UserController;
