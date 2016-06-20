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
			promise.then(
				function(data) {
					console.log(data);
				},
				function(error) {
					console.log(data);
				});
		}

		function createPromise() {
			var deferred = $q.defer();

			$http.get('/employees')
				.success(function(data) {
					debugger;
					deferred.resolve();
				})
				.error(function(data) {
					debugger;
					deffered.reject();
				})

			return deferred.promise;
		}

	}
})();