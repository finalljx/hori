'use strict';

angular.module('hori').controller('LoginCtrl', ['$scope', '$state', 'configService','horiService','deviceService',
    function($scope, $state,config,hori,ds) {
        $scope.login = function() {
            //$state.go('home');
            //console.log(deviceSer.getMobileType());
            console.log(config);
            console.log(hori);
            console.log(ds);
        };
    }
]);
