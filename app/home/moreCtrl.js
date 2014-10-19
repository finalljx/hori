'use strict';

angular.module('hori').controller('MoreCtrl', ['$scope', '$state', '$stateParams', '$timeout', 'dataService',
    function($scope, $state, $stateParams, $timeout, dataService) {

        var name = $stateParams.name,
            type = $stateParams.type;

        $scope.title = name;
        $scope.isLoading = false;
        $scope.news = [];

        $scope.refresh = function(){
        	$scope.isLoading = true;
        	var tt = $timeout(function(){
        		for(var i=0; i<4; i++){
        			$scope.news.push({text:name, date: '10-17'});
        		}
        		$scope.isLoading = false;
        		$timeout.cancel(tt);
        	}, 2500);
        };

        $scope.loadDetail = function(news) {

            $state.go('loadDetail', {
                type: type,
                name: name,
                news:news 
            });

        }

        for(var i=0; i<16; i++) {
            $scope.news.push({text: name, date: '10-17'});
        }

    }
]);
