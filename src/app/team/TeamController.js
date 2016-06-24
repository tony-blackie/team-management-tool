(function() {
	angular
		.module('app.users')
		.controller('TeamController', TeamController);

	TeamController.$inject = ['TeamStoreService'];

	function TeamController(TeamStoreService) {
		function activateTeam(name) {
			TeamStoreService.setActiveTeam(name);
		}

		function alertSomething() {
			alert('44');
		}
	}
})();