import angular from 'angular';
import 'angular-ui-router';

import AnimalController from './controllers/animal';
import ShelterController from './controllers/shelter';

angular
  .module('app', ['ui.router'])
  .controller('ShelterController', ShelterController)
  .controller('AnimalController', AnimalController);
