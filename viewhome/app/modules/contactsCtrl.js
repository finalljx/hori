'use strict';
angular.module('hori').controller('ContactsCtrl', ['$scope', '$state', 'dataService',
    function($scope, $state, dataService) {
        $scope.title = '物品开单';
        $scope.queryStr = '';
        $scope.list = [];


        $scope.query = function(params) {
            console.log($scope.obj);
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
                        //Array.prototype.push.apply($scope.list, result.data.contactlist);
                        $scope.obj=result.data;
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
