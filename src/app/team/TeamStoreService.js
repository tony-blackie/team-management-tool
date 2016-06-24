(function() {
	angular
		.module('app.users')
		.factory('TeamStoreService', TeamStoreService);

	function TeamStoreService() {
		var service = this;

		service.activeTeam = '';

		angular.extend(service, {
			setActiveTeam: setActiveTeam,
			getActiveTeam: getActiveTeam
		});

		return service;

		function setActiveTeam(teamName) {
			service.activeName = teamName;
			console.log(service.activeName);
		}

		function getActiveTeam() {
			console.log(service.activeName);
			return service.activeName;
		}
	}
})();