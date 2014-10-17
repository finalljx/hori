'use strict';

angular.module('hori').controller('HomeCtrl', ['$scope', '$state', 'dataService',
    function($scope, $state, dataService) {
        var news = dataService.getNews(),
            notices = dataService.getNotices();
        $scope.title = 'home';

        $scope.news = angular.copy(news);
        $scope.notices = angular.copy(notices);

        $scope.loadMore = function(type, name) {
            if (type == 'news') {
                $state.go('loadmore', {
                    type: type,
                    name: name
                });
            }
            else{
                Array.prototype.push.apply($scope.notices, notices);
            }

        };
    }
]);