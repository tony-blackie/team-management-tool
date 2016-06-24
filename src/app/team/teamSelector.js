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