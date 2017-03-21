function LayoutController ($scope, $rootScope, $state, AccountService) {

  $scope.signOut = () => {
    AccountService.logout().then( () => {
      $rootScope.loggedIn = false;
      $state.go('root.home');
    });
  };

}

LayoutController.$inject = ['$scope', '$rootScope', '$state', 'AccountService'];

export default LayoutController;
