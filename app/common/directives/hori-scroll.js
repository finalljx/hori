angular.module('hori').directive('horiScroll', function() {

	return {
		restrict: 'EA',
		scope: {
			onBottomRefresh: '&',
			isLoading: '='
		},
		transclude: true,
		replace: true,
		template: '<div style="overflow:hidden; height: 100%"><div><div ng-transclude></div><div class="text-center" ng-show="isLoading">加载...</div></div></div>',
		link: function($scope, $element, $attr) {
			var scroll,
				elem = $element[0],
				defaultOptions = {
					mouseWheel: true,
					scrollbars: false
				};

			if (angular.isObject($attr.options)) {
				angular.extend(defaultOptions, $attr.options);
			}

			var st = setTimeout(function() {
				aa = scroll = new IScroll(elem, defaultOptions);
				scroll.on('scrollEnd', function() {
					if (this.y < 0 && (this.y - this.maxScrollY) < 8 && !$scope.isLoading) {
						$scope.$parent.$apply(function(){
							$scope.onBottomRefresh();
						});
					}

				});

			}, 10);

			$scope.isShowLoading = false;

			$scope.$watch('isLoading', function(newValue, oldValue) {
				if (newValue != oldValue && scroll) {
					scroll.refresh();
				}
			});

			$scope.$on('$destroy', function() {
				clearTimeout(st);

				if (scroll) {
					scroll.destroy();
				}
			});
		}
	};
});