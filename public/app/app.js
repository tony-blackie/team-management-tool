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
(function () {
	angular
		.module('app.users')
		.directive('teamSelector', teamSelector);

		teamSelector.$inject = ['TeamStoreService'];

		function teamSelector(TeamStoreService) {
			var directive = {
				link: link,
				templateUrl: './views/team-selector.html',
				restrict: 'EA',
				controller: function($scope) {
					$scope.appendElement = function() {
						$scope.counter = 0;
						var teamTitleContainer = angular.element('.panel-title');
						var collapsedContent = angular.element('.tm-team-list');
						var name = angular.element('.tm-team-name')[0].value;
						collapsedContent.append(
							'<div class="panel panel-default" >' +
								'<div class="panel-heading"  >' +
									'<h4 class="panel-title">' +
										'<a role="button" data-toggle="collapse" ng-click="teamCtrl.alertSomething()" ' +
											'data-parent="#accordion" href="#collapse' + $scope.counter + '" aria-expanded="false" aria-controls="collapse' + scope.counter + '"">' + name + '</a>' +
									'</h4>' +
								'</div>' +
								'<div id="collapse' + $scope.counter + '" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">' +
									'<div class="panel-body"></div>' +
    							'</div>' +
    						'</div>'
    					);
					}	
				}
			};

			return directive;

			function link(scope, element, attrs) {


				// function activateTeam(name) {
				// 	TeamStoreService.setActiveTeam(name);
				// }
				scope.alertSomething = function() {
					alert('4');
				}
				

				var plus = angular.element('.tm-plus');
				plus.on('click', function() {
					scope.appendElement();
    				scope.counter = scope.counter + 1;
				});
			}
		}
})();
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
(function() {
	"use strict";

	angular
		.module('app.users')
		.controller('UserListController', UserListController);

	//UserListController.$inject = ['$http', '$q'];

	function UserListController() {
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
			makeActive: makeActive
		});

		function getSomeList() {
			alert('8');
		}

		function makeActive($index) {
			angular.forEach(vm.tabs, function(value, index) {
				value.isActive = (index === $index) ? true : false;
			});
		}

		function activateTeam() {
			alert(4);
		}

		function alertSomething() {
			alert(6);
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
                controller: 'EmployeeController as employeeCtrl'
            });
    }
})();
//# sourceMappingURL=app.js.map
