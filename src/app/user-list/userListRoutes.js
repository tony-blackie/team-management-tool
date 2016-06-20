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