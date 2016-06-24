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