import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import AppConfig from './config';
import SERVER from './server';
import setup from './setup';

import AccountService from './services/account';
import AdoptionService from './services/adoption';

import LayoutController from './controllers/layout';
import AnimalController from './controllers/animal';
import AnimalAddController from './controllers/animal-add';
import ShelterController from './controllers/shelter';
import UserController from './controllers/user';

angular
  .module('app', ['ui.router', 'ngCookies'])
  .config(AppConfig)
  .run(setup)
  .constant('SERVER', SERVER)
  .service('AccountService', AccountService)
  .service('AdoptionService', AdoptionService)
  .controller('LayoutController', LayoutController)
  .controller('UserController', UserController)
  .controller('ShelterController', ShelterController)
  .controller('AnimalController', AnimalController)
  .controller('AnimalAddController', AnimalAddController);
