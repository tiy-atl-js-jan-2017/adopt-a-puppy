function UserController ($scope, $state, $rootScope, ApiService) {
  $scope.notifications = [];

  $scope.removeMsg = (msg) => {
    var removed = $scope.notifications.filter(x => x != msg);
    $scope.notifications = removed;
  };

  $scope.signUp = (user) => {
    ApiService.register(user).then(resp => {
      var message = `Created new user: ${resp.data.name}`;
      $scope.notifications.push(message);
    }).catch(error => {
      console.log(error);
    });
  };

  $scope.signIn = (user) => {
    ApiService.login(user).then(resp => {
      $rootScope.loggedIn = true;
      $state.go('root.home');
    }).catch(error => {
      $scope.notifications.push(error.data.message);
    });
  };

}

UserController.$inject = ['$scope', '$state', '$rootScope', 'ApiService'];

export default UserController;
