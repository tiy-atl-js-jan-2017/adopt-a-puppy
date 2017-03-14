import angular from 'angular';

import AnimalController from './controllers/animal';
import ShelterController from './controllers/shelter';

angular
  .module('app', [])
  .controller('ShelterController', ShelterController)
  .controller('AnimalController', AnimalController);
