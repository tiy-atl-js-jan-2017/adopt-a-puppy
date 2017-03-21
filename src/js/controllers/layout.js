function LayoutController ($scope, $rootScope, $state, ApiService) {

  $scope.signOut = () => {
    ApiService.logout().then( () => {
      $rootScope.loggedIn = false;
      $state.go('root.home');
    });
  };

}

LayoutController.$inject = ['$scope', '$rootScope', '$state', 'ApiService'];

export default LayoutController;
