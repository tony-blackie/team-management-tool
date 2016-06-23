(function() {
	
	angular
		.module('app.users')
		.controller('EmployeeController', EmployeeController);

	EmployeeController.$inject = ['EmployeeService'];

	function EmployeeController(EmployeeService) {
		var vm = this;

		vm.employees = [];

		angular.extend(vm, {
			getAllEmployees: getAllEmployees
		});

		vm.getAllEmployees();

		function getAllEmployees() {
			EmployeeService.getAllEmployees().then(function(data) {
				vm.employees = data;
			});
		}
	}
})();