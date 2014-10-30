'use strict';

angular.module('hori').controller('DetailCtrl', ['$scope', '$stateParams', '$timeout', 'dataService',
	function($scope, $stateParams, $timeout, dataService) {
		$scope.title = '新闻正文';
	}
]);