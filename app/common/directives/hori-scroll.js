angular.module('hori').directive('horiScroll', function(){

	return {
		restrict: 'EA',
		scope:{},
		transclude: true,
		replace: true,
		template: '<div style="overflow:hidden; height: 100%"><div ng-transclude></div></div>',
		link: function($scope, $element, $attr) {
			var scroll,
				elem = $element[0],
				defaultOptions = {
					mouseWheel: true,
    				scrollbars: false
				};

			if(angular.isObject($attr.options)){
				angular.extend(defaultOptions, $attr.options);
			}

       		setTimeout(function(){
       			scroll = new IScroll(elem, defaultOptions);
       		}, 10);


       		$scope.$on('$destroy', function(){
       			if(scroll){
       				scroll.destroy();
       			}
       		});
      }
	};
});