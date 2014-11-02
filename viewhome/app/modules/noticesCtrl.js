'use strict';

angular.module('hori').controller('NoticesCtrl', ['$scope', '$state', 'dataService',
    function($scope, $state, dataService) {
        $scope.title = '通知通告';
        $scope.isLoading = false;
        $scope.list = [];

        function query() {
            $scope.isLoading = true;
            dataService.getNews().then(function(result) {
                $scope.isLoading = false;
                Array.prototype.push.apply($scope.list, result.data.newslist);
            }, function(data) {
                $scope.isLoading = false;
            });
        }

        $scope.refresh = function() {
            query();
        };

        $scope.loadDetail = function(news) {
            $state.go('loadDetail');
        }

        query();
    }
]);
