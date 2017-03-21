function ApiService ($http, SERVER, $cookies) {

  this.register = (user) => {
    return $http.post(`${SERVER}/users`, user);
  };

  this.login = (user) => {
    return $http.post(`${SERVER}/login`, user).then(resp => {
      $cookies.put('access-token', resp.data.token);
      $http.defaults.headers.common['access-token'] = resp.data.token;
      return resp;
    });
  };

};

ApiService.$inject = ['$http', 'SERVER', '$cookies'];

export default ApiService;
