'use strict';

angular.module('hori').controller('HomeCtrl', ['$scope', '$state', 'dataService',
    function($scope, $state, dataService) {

        $scope.title = 'home';

        $scope.news = dataService.getNews();
        $scope.notices = dataService.getNews();

        $scope.loadMore = function(type, name) {
            if (type == 'news') {
                $state.go('loadmore', {
                    type: type,
                    name: name
                });
            }
            else{
                Array.prototype.push.apply($scope.notices, dataService.getNews());
            }

        };
    }
]);