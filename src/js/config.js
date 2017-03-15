function Config ($stateProvider, $urlRouterProvider) {
  console.log($stateProvider);
  console.log($urlRouterProvider);

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/shelter-list.tpl.html',
      controller: 'ShelterController'
    })
    .state('shelter-new', {
      url: '/shelters/new',
      templateUrl: 'templates/shelter-add.tpl.html',
      controller: 'ShelterController'
    })
    .state('animals', {
      url: '/shelters/:id/animals',
      templateUrl: 'templates/animals-list.tpl.html',
      controller: 'AnimalController'
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
