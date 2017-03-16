function LayoutController ($scope, $rootScope, $cookies, $state) {

  $scope.signOut = () => {
    $rootScope.loggedIn = false;
    $cookies.remove('access-token');
    $state.go('root.home');
  };

}

LayoutController.$inject = ['$scope', '$rootScope', '$cookies', '$state'];

export default LayoutController;
