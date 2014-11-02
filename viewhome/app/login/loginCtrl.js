'use strict';

angular.module('hori').controller('LoginCtrl', ['$scope', '$state','authentication',
    function($scope, $state, authentication) {
    	$scope.user = {
    		userName: '',
    		password: '',
    		isRemember: false
    	};

        $scope.login = function() {
			authentication.login($scope.user).then(function(result){
				if(result && result.data && result.data.success){
					$state.go('home');
				}
			});
        };
    }
]);
