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