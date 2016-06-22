(function() {
	
	angular
		.module('app.users')
		.factory('EmployeeService', EmployeeService);

	EmployeeService.$inject = ['$http', '$q'];

	function EmployeeService($http, $q) {
		var vm = this;

		angular.extend(vm, {
			getAllEmployees: getAllEmployees,
			createPromise: createPromise
		});

		return vm;

		function getAllEmployees() {
			var promise = vm.createPromise();
			return promise;
		}

		function createPromise() {
			var deferred = $q.defer();

			$http.get('/employees')
				.success(function(data) {
					deferred.resolve(data);
				})
				.error(function(data) {
					deffered.reject("Could not get all employees!");
				})

			return deferred.promise;
		}

	}
})();