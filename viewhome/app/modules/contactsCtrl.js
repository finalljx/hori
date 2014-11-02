'use strict';
angular.module('hori').controller('ContactsCtrl', ['$scope', '$state', 'dataService',
    function($scope, $state, dataService) {
        $scope.title = '电话查询';
        $scope.queryStr = '';
        $scope.list = [];

        $scope.query = function(params) {
            //没输入任何值时直接返回
            if(!params){
                return;
            }

            $scope.list = [];
            dataService.getContacts({
                queryStr: params
            }).then(
                function(result) {
                    if (result.data) {
                        Array.prototype.push.apply($scope.list, result.data.contactlist);
                    }
                },

                function(result) {

                }
            );
        };

        $scope.resetScroll = function(){
            if($scope.iscroll){
                $scope.iscroll.refresh();
            }
        };
    }
]);
