function AnimalAddController ($state, AdoptionService) {

  let vm = this;

  vm.addPuppy = addPuppy;

  function addPuppy (data, shelterId) {
    AdoptionService.addAnimal(shelterId, data).then(resp => {
      $state.go('root.animals', { id: shelterId });
    });
  };

};

AnimalAddController.$inject = ['$state', 'AdoptionService'];

export default AnimalAddController;
