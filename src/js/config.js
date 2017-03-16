function Config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html',
      controller: 'LayoutController'
    })
    .state('root.signup', {
      url: '/sign-up',
      controller: 'UserController',
      templateUrl: 'templates/sign-up.tpl.html'
    })
    .state('root.home', {
      url: '/home',
      templateUrl: 'templates/shelter-list.tpl.html',
      controller: 'ShelterController'
    })
    .state('root.shelter-new', {
      url: '/shelters/new',
      templateUrl: 'templates/shelter-add.tpl.html',
      controller: 'ShelterController'
    })
    .state('root.animals-new', {
      url: '/animals/new',
      templateUrl: 'templates/animals-add.tpl.html',
      controller: 'AnimalAddController'
    })
    .state('root.animals', {
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
