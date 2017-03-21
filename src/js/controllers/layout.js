function LayoutController ($scope, $state, AccountService) {

  $scope.$on('signedIn', (event, data) => {
    console.log("inside signed in event handler");
    console.log("got some data: ", data);
    $scope.loggedIn = true;
  });

  $scope.signOut = () => {
    AccountService.logout().then( () => {
      $state.go('root.home');
    });
  };

}

LayoutController.$inject = ['$scope', '$state', 'AccountService'];

export default LayoutController;
