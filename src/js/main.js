import angular from 'angular';
import 'angular-ui-router';

import AppConfig from './config';

import AnimalController from './controllers/animal';
import AnimalAddController from './controllers/animal-add';
import ShelterController from './controllers/shelter';

angular
  .module('app', ['ui.router'])
  .config(AppConfig)
  .controller('ShelterController', ShelterController)
  .controller('AnimalController', AnimalController)
  .controller('AnimalAddController', AnimalAddController);
