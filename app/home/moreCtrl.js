'use strict';

angular.module('hori').controller('MoreCtrl', ['$scope', '$stateParams', '$timeout', 'dataService',
    function($scope, $stateParams, $timeout, dataService) {

    	var news = dataService.getNews();

        $scope.title = $stateParams.name;
        $scope.isLoading = false;

        $scope.refresh = function(){
        	$scope.isLoading = true;
        	var tt = $timeout(function(){
        		for(var i=0; i<4; i++){
        			$scope.news.push({text: '新闻', date: '10-17'});
        		}
        		$scope.isLoading = false;
        		$timeout.cancel(tt);
        	}, 2500);
        }

        $scope.news = angular.copy(news);

        Array.prototype.push.apply($scope.news, news); 
        Array.prototype.push.apply($scope.news, news);
        Array.prototype.push.apply($scope.news, news);
    }
]);
