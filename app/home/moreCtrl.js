'use strict';

angular.module('hori').controller('MoreCtrl', ['$scope', '$stateParams', '$timeout', 'dataService',
    function($scope, $stateParams, $timeout, dataService) {

    	var news = dataService.getNews();

        $scope.title = $stateParams.name;
        $scope.isLoading = false;

        $scope.refresh = function(){
        	$scope.isLoading = true;
        	var tt = $timeout(function(){
        		Array.prototype.push.apply($scope.news, news); 
        		$scope.isLoading = false;
        	}, 1500);
        }

        $scope.news = news;

        $scope.$on('$destroy', function(){
    		$timeout.cancel(tt);
        });

        Array.prototype.push.apply($scope.news, news); 
        Array.prototype.push.apply($scope.news, news);
        Array.prototype.push.apply($scope.news, news);
    }
]);
