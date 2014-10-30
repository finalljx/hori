'use strict';

angular.module('hori').controller('LoginCtrl', ['$scope', '$state','configService','deviceService',
    function($scope, $state,config,deviceService) {
        $scope.login = function() {
			//consolelog(config.serverBaseUrl);
			try{
					var random = new Date().getTime();
					var url=config.appServerHost+"view/oa/loginvalidate/names.nsf?Login";
					url = url + "&data-random=" + random;
				}catch(e){}
				var data = 'Username=dev1&Password=000&$PublicAccess=1&ReasonType=0&data-userid=Username&data-password=Password&data-login=true';
				
			deviceService.ajax({
				"type":"post",
				"url":url,
				"data":data
			}).then(function(data){console.log(data)},function(data){alert("failed")});
			
            //$state.go('home');
        };
    }
]);
