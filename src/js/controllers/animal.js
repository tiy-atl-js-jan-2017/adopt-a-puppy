function AnimalController ($stateParams, AdoptionService) {

  let vm = this;

  vm.puppies = [];

  function init () {
    AdoptionService.getShelter($stateParams.id).then(resp => {
      vm.puppies = resp.data.Animals;
    });
  }

  init();

}

AnimalController.$inject = ['$stateParams', 'AdoptionService'];

export default AnimalController;
