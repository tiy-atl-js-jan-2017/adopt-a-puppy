import angular from 'angular';
import 'angular-ui-router';

import AppConfig from './config';
import SERVER from './server';

import AnimalController from './controllers/animal';
import AnimalAddController from './controllers/animal-add';
import ShelterController from './controllers/shelter';

angular
  .module('app', ['ui.router'])
  .config(AppConfig)
  .constant('SERVER', SERVER)
  .controller('ShelterController', ShelterController)
  .controller('AnimalController', AnimalController)
  .controller('AnimalAddController', AnimalAddController);
