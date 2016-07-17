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
(function () {
	angular
		.module('app.users')
		.directive('teamDirective', teamDirective);

		teamDirective.$inject = ['TeamStoreService', '$compile'];

		function teamDirective(TeamStoreService, $compile) {
			var directive = {
				link: link,
				templateUrl: './views/team-selector.html',
				restrict: 'E',
				controller: function($scope, $element) {

					$scope.teamName = '';
					
					angular.extend($scope, {
						appendElement: appendElement,
						incrementTeamCounter: incrementTeamCounter,
						addTeam: addTeam	
					});

					function initializeTeamList() {
						forEach($scope.teamModel, function(current, i, array) {
							this.appendElement();
							this.incrementTeamCounter();
						});
					}

					function addTeam() {
						this.getTeamName();
						this.addTeamToModel();
						this.appendElement();
						this.incrementTeamCounter();
						TeamStoreService.setActiveTeam($scope.teamName);
					}

					function getTeamName() {
						$scope.teamName = angular.element('.tm-team-name')[0].value;
					}

					function addTeamToModel() {
						$scope.teamModel.push(
							{
								name: $scope.teamName,
								members: []
							}
						);

					}

					function appendElement() {
						var teamTitleContainer = angular.element('.panel-title');
						var collapsedContent = angular.element('.tm-team-list');
						collapsedContent.append($compile(
							'<div class="panel panel-default" >' +
								'<div class="panel-heading"  >' +
									'<h4 class="panel-title">' +
										'<div role="button" data-toggle="collapse" ng-click="changeActiveTeam($event)" ' +
											'data-parent="#accordion" href="#collapse' + TeamStoreService.getTeamCounter() + '" aria-expanded="false" aria-controls="collapse' + 
											TeamStoreService.getTeamCounter() + '"">' + $scope.teamName + '</div>' +
									'</h4>' +
								'</div>' +
								'<div id="collapse' + TeamStoreService.getTeamCounter() + '" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">' +
									'<div class="panel-body"></div>' +
    							'</div>' +
    						'</div>')($scope)
    					);
					}

					function incrementTeamCounter() {
						TeamStoreService.incrementTeamCounter();
					}
				}
			};

			return directive;

			function link($scope, element, attrs) {

				$scope.teamModel = [
					{
						name: 'team one',
						members: [
							{
								name: 'Julian'
							}
						]
					}
				];

				$scope.changeActiveTeam = function($event) {
					var activeTeamName;

					if (TeamStoreService.isCollapsed($event)) {
						activeTeamName = angular.element($event.target).html();
					} else {
						activeTeamName = "";

					}
					TeamStoreService.setActiveTeam(activeTeamName, $event);
				};
				

				var plus = angular.element('.tm-plus');
				plus.on('click', function() {
					scope.addTeam();
				});
			}
		}
})();
(function() {
	"use strict";

	angular
		.module('app.users')
		.controller('UserListController', UserListController);

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
			makeActive: makeActive
		});


		function makeActive($index) {
			angular.forEach(vm.tabs, function(value, index) {
				value.isActive = (index === $index) ? true : false;
			});
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
        $urlRouterProvider.otherwise('/');

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
