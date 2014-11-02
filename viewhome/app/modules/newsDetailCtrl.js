'use strict';

angular.module('hori').controller('NewsDetailCtrl', ['$scope', 'dataService',
	function($scope, dataService) {
		$scope.title = '新闻正文';
		$scope.news = dataService.getNewsDetail();
	}
]);