'use strict';

angular.module('hori').controller('DetailCtrl', ['$scope', 'dataService',
	function($scope, dataService) {
		$scope.title = '新闻正文';
		$scope.list = dataService.getFormInfo();
	}
]);