'use strict';

angular.module('hori').controller('HomeCtrl', ['$scope', '$state', 'dataService',
    function($scope, $state, dataService) {
        var news = dataService.getNews(),
            notices = dataService.getNotices();
        $scope.title = 'home';

        $scope.news = angular.copy(news);
        $scope.notices = angular.copy(notices);
        $scope.images = dataService.getImagesNews();

        $scope.loadContact = function(type, name) {
            $state.go('loadContact');
        };

        $scope.loadMore = function(type, name) {
            Array.prototype.push.apply($scope.notices, notices);
        };

        $scope.showMore = function(type, name) {
            $state.go('loadmore', {
                type: type,
                name: name
            });
        };

        $scope.loadDetail = function(type, name, news) {
            $state.go('loadDetail', {
                type: type,
                name: name,
                news:news 
            });
        }

    }
]);