'use strict';

angular.module('hori').controller('HomeCtrl', ['$scope', '$state', 'dataService',
    function($scope, $state, dataService) {
        var notices = dataService.getNotices();
        $scope.title = 'home';

        $scope.news = [];
        $scope.unreadsNum = 0; 
        $scope.notices = angular.copy(notices);
        $scope.images = dataService.getImagesNews();

        $scope.loadModule = function(module) {
            $state.go('modules/' + module);
        };

        $scope.loadDetail = function(type, name, news) {
            $state.go('loadDetail', {
                type: type,
                name: name,
                news:news 
            });
        };

        $scope.logout = function(){
            $state.go('login');
        };


        //获取企业信息
        dataService.getNews({start: 1, count: 4}).then(function(result){
             Array.prototype.push.apply($scope.news, result.data.newslist);
        });

        //获取未读消息条数
        dataService.getUnreadsNum().then(function(result){
            if(result && result.data && result.data.number){
                $scope.unreadsNum = result.data.number;
            }
        });

    }
]);