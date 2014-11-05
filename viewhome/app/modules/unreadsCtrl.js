'use strict';

angular.module('hori').controller('UnreadsCtrl', ['$scope', '$state', 'dataService',
    function($scope, $state, dataService) {
        $scope.title = '未读消息';
        $scope.isLoading = false;
        $scope.list = [];

        function query() {
            $scope.isLoading = true;
            dataService.getUnreads().then(function(result) {
                $scope.isLoading = false;
                Array.prototype.push.apply($scope.list, result.data.tasklist);
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
