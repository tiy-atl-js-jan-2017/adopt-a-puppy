function UserController ($scope, $state, AccountService) {

  let vm = this;

  vm.notifications = [];
  vm.removeMsg = removeMsg;
  vm.signUp = signUp;
  vm.signIn = signIn;

  function removeMsg (msg) {
    var removed = vm.notifications.filter(x => x != msg);
    vm.notifications = removed;
  };

  function signUp (user) {
    AccountService.register(user).then(resp => {
      var message = `Created new user: ${resp.data.name}`;
      vm.notifications.push(message);
    }).catch(error => {
      console.log(error);
    });
  };

  function signIn (user) {
    AccountService.login(user).then(resp => {
      $scope.$emit('signedIn', {});
      $state.go('root.home');
    }).catch(error => {
      vm.notifications.push(error.data.message);
    });
  };

}

UserController.$inject = ['$scope', '$state', 'AccountService'];

export default UserController;
