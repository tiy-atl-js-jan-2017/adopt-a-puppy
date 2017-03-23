function ShelterController ($state, AdoptionService) {

  let vm = this;

  vm.shelters = [];
  vm.addShelter = addShelter;

  function init () {
    AdoptionService.listShelters().then(resp => {
      vm.shelters = resp.data;
    });
  };

  init();

  function addShelter (data) {
    AdoptionService.addShelter(data).then(resp => {
      $state.go('root.home');
    });
  };
}

ShelterController.$inject = ['$state', 'AdoptionService'];

export default ShelterController;
