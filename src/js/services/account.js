function AccountService ($http, SERVER, $cookies) {

  let service = this;

  service.register = register;
  service.login = login;
  service.logout = logout;

  function register (user) {
    return $http.post(`${SERVER}/users`, user);
  };

  function login (user) {
    return $http.post(`${SERVER}/login`, user).then(resp => {
      $cookies.put('access-token', resp.data.token);
      $http.defaults.headers.common['access-token'] = resp.data.token;
      return resp;
    });
  };

  function logout () {
    $cookies.remove('access-token');
    delete $http.defaults.headers.common['access-token'];
  };

};

AccountService.$inject = ['$http', 'SERVER', '$cookies'];

export default AccountService;
