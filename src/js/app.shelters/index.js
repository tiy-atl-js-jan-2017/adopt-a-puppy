import angular from 'angular';

import AdoptionService from './services/adoption';

import AnimalController from './controllers/animal';
import AnimalAddController from './controllers/animal-add';
import ShelterController from './controllers/shelter';

angular
  .module('app.shelters', [])
  .service('AdoptionService', AdoptionService)
  .controller('AnimalController', AnimalController)
  .controller('AnimalAddController', AnimalAddController)
  .controller('ShelterController', ShelterController);
