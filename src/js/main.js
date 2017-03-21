import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import AppConfig from './config';
import SERVER from './server';
import setup from './setup';

import ApiService from './services/api';

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
  .service('ApiService', ApiService)
  .controller('LayoutController', LayoutController)
  .controller('UserController', UserController)
  .controller('ShelterController', ShelterController)
  .controller('AnimalController', AnimalController)
  .controller('AnimalAddController', AnimalAddController);
