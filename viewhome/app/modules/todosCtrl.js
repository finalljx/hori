'use strict';

angular.module('hori').controller('TodosCtrl', ['$scope', '$state', 'dataService',
    function($scope, $state, dataService) {
        $scope.title = '待办事宜';
        $scope.isLoading = false;
        $scope.list = [];

        function query() {
            $scope.isLoading = true;
            dataService.getTodos().then(function(result) {
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
