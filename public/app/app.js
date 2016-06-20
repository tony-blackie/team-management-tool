(function() {
    "use strict";

    angular
        .module('app', ['app.users']);
})();
(function() {
    "use strict";

    angular
        .module('app.users', ['ui.router']);
})();
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
(function() {
	"use strict";

	angular
		.module('app.users')
		.controller('UserListController', UserListController);

	//UserListController.$inject = ['$http', '$q'];

	function UserListController($http, $q, EmployeeService) {
		var vm = this;
		
		vm.tabs = [
			{
				uiSref: "team-management",
				name: "Teams",
				isActive: true
			},
			{
				uiSref: "employee-management",
				name: "Employees",
				isActive: false
			}
		];
		vm.isActive = false;
		
		angular.extend(vm, {
			getSomeList: getSomeList,
			makeActive: makeActive,
			getEmployeeList: getEmployeeList
		});

		getEmployeeList();

		function getSomeList() {
			alert('8');
		}

		function makeActive($index) {
			angular.forEach(vm.tabs, function(value, index) {
				value.isActive = (index === $index) ? true : false;
			});
		}

		function getEmployeeList() {
			EmployeeService.getAllEmployees();
		}
	}
})();
(function() {
    "use strict";

    angular
        .module('app.users')
        .config(userListRoutes);

    userListRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function userListRoutes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/team');

        $stateProvider
            .state('team-management', {
                url: '/team',
                templateUrl: './views/team-management.html',
                controller: 'UserListController as userListCtrl'
            })
            .state('employee-management', {
                url: '/employee',
                templateUrl: './views/employee-management.html',
                controller: 'UserListController as userListCtrl'
            });
    }
})();
//# sourceMappingURL=app.js.map
