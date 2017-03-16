import angular from 'angular';
import 'angular-ui-router';

import AppConfig from './config';
import SERVER from './server';

import AnimalController from './controllers/animal';
import AnimalAddController from './controllers/animal-add';
import ShelterController from './controllers/shelter';
import UserController from './controllers/user';

angular
  .module('app', ['ui.router'])
  .config(AppConfig)
  .constant('SERVER', SERVER)
  .controller('UserController', UserController)
  .controller('ShelterController', ShelterController)
  .controller('AnimalController', AnimalController)
  .controller('AnimalAddController', AnimalAddController);
