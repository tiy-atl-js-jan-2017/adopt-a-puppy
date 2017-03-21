function setup ($rootScope, $cookies, $http) {

  var token = $cookies.get('access-token');

  if (token) {
    $http.defaults.headers.common['access-token'] = token;
    $rootScope.$broadcast('signedIn', {});
  }

}

setup.$inject = ['$rootScope', '$cookies', '$http'];

export default setup;
