(function() {
	angular
		.module('app.users')
		.factory('TeamStoreService', TeamStoreService);

	function TeamStoreService() {
		var service = this;

		service.activeTeam = '';
		service.teamCounter = 0;

		angular.extend(service, {
			setActiveTeam: setActiveTeam,
			getActiveTeam: getActiveTeam,
			incrementTeamCounter: incrementTeamCounter,
			getTeamCounter: getTeamCounter,
			isCollapsed: isCollapsed
		});

		return service;

		function setActiveTeam(teamName, $event) {
			service.activeName = teamName;
			console.log(service.activeName);
		}

		function isCollapsed($event) {
			var isCollapsed = angular.element($event.target).hasClass('collapsed') ? true : false;
			return isCollapsed;
		}

		function getActiveTeam() {
			return service.activeName;
		}

		function incrementTeamCounter() {
			service.teamCounter += 1;
		}

		function getTeamCounter() {
			return service.teamCounter;
		}
	}
})();