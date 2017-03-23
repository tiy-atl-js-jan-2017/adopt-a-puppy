function LayoutController ($scope, $state, AccountService) {

  let vm = this;

  vm.loggedIn = false;
  vm.signOut = signOut;

  $scope.$on('signedIn', (event, data) => {
    console.log("inside signed in event handler");
    console.log("got some data: ", data);
    vm.loggedIn = true;
  });

  function signOut () {
    AccountService.logout().then( () => {
      $state.go('root.home');
    });
  };

}

LayoutController.$inject = ['$scope', '$state', 'AccountService'];

export default LayoutController;
