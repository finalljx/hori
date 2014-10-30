'use strict';

angular.module('hori').controller('LoginCtrl', ['$scope', '$state',
    function($scope, $state) {
        $scope.login = function() {
            $state.go('home');
        };
    }
]);
