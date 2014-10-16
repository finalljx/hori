'use strict';

angular.module('hori').controller('HomeCtrl', ['$scope', '$state', 'dataService',
    function($scope, $state, dataService) {

        $scope.title = 'home';

        $scope.news = dataService.getNews();

        $scope.loadMore = function(type, name){
        	$state.go('loadmore', {
        		type: type,
        		name: name
        	});
        };
    }
]);
