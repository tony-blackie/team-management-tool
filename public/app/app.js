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
