'use strict';

angular.module('hori').controller('MoreCtrl', ['$scope', '$stateParams', 'dataService',
    function($scope, $stateParams, dataService) {

    	var news = dataService.getNews();

        $scope.title = $stateParams.name;

        $scope.news = news;

        Array.prototype.push.apply($scope.news, news); 
        Array.prototype.push.apply($scope.news, news);
        Array.prototype.push.apply($scope.news, news);
    }
]);
