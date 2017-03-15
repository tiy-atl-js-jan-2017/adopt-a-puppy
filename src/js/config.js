function Config ($stateProvider, $urlRouterProvider) {
  console.log($stateProvider);
  console.log($urlRouterProvider);

  $stateProvider
    .state('home', {
      url: '/home',
      template: '<h1>Hello World</h1>'
    })
    .state('page-not-found', {
      url: '/not-found',
      template: `<h2>No such page. Haha. You're dumb.</h2>`
    });

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/not-found');
};

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
