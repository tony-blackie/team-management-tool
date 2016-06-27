(function() {
	
	angular
		.module('app.users')
		.controller('EmployeeController', EmployeeController);

	EmployeeController.$inject = ['EmployeeService', 'TeamStoreService'];

	function EmployeeController(EmployeeService, TeamStoreService) {
		var vm = this;

		vm.employees = [];

		angular.extend(vm, {
			getAllEmployees: getAllEmployees,
			addEmployee: addEmployee
		});

		vm.getAllEmployees();

		function getAllEmployees() {
			EmployeeService.getAllEmployees().then(function(data) {
				vm.employees = data;
			});
		}

		function addEmployee($event) {
			if (TeamStoreService.getActiveTeam() !== "") {

			}
		}
	}
})();