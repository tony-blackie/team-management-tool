(function () {
	angular
		.module('app.users')
		.directive('teamSelector', teamSelector);

		teamSelector.$inject = ['TeamStoreService', '$compile'];

		function teamSelector(TeamStoreService, $compile) {
			var directive = {
				link: link,
				templateUrl: './views/team-selector.html',
				restrict: 'EA',
				controller: function($scope, $element) {

					$scope.teamName = '';
					
					angular.extend($scope, {
						appendElement: appendElement,
						incrementTeamCounter: incrementTeamCounter,
						addTeam: addTeam	
					});

					function addTeam() {
						this.appendElement();
						this.incrementTeamCounter();
						TeamStoreService.setActiveTeam($scope.teamName);
					}

					function appendElement() {
						var teamTitleContainer = angular.element('.panel-title');
						var collapsedContent = angular.element('.tm-team-list');
						$scope.teamName = angular.element('.tm-team-name')[0].value;
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

			function link(scope, element, attrs) {

				scope.changeActiveTeam = function($event) {
					var activeTeamName;
					
					if (TeamStoreService.isCollapsed($event)) {
						activeTeamName = angular.element($event.target).html();
					} else {
						activeTeamName = "";
						
					}
					TeamStoreService.setActiveTeam(activeTeamName, $event);
				}
				

				var plus = angular.element('.tm-plus');
				plus.on('click', function() {
					scope.addTeam();
				});
			}
		}
})();