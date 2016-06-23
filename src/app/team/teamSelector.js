(function () {
	angular
		.module('app.users')
		.directive('teamSelector', teamSelector);

		function teamSelector() {
			var directive = {
				link: link,
				templateUrl: './views/team-selector.html',
				restrict: 'EA'
			};

			return directive;

			function link(scope, element, attrs) {
				var plus = angular.element('.tm-plus');
				plus.on('click', function() {
					var teamList = angular.element('.tm-team-list');
					var name = angular.element('.tm-team-name')[0].value;
					teamList.append('<div> ' + name + '</div>');
				});
			}
		}
})();