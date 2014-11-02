'use strict';

angular.module('hori', ['ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'mobile-angular-ui'])
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            // 找不到任何匹配的路由, 则跳转到登录页
            $urlRouterProvider.otherwise('/login');

            //配置路由
            $stateProvider
                .state('login', {
                    url: "/login",
                    templateUrl: "app/login/login.html",
                    controller: 'LoginCtrl'
                })
                .state('home', {
                    url: "/home",
                    templateUrl: "app/home/home.html",
                    controller: 'HomeCtrl'
                })
                .state('modules/news', {
                    url: "/modules/news",
                    templateUrl: "app/modules/news.html",
                    controller: 'NewsCtrl'
                })
                .state('modules/todos', {
                    url: "/modules/todos",
                    templateUrl: "app/modules/todos.html",
                    controller: 'TodosCtrl'
                })
                .state('modules/contacts', {
                    url: "/modules/contacts",
                    templateUrl: "app/modules/contacts.html",
                    controller: 'ContactsCtrl'
                })
                .state('modules/unreads', {
                    url: "/modules/unreads",
                    templateUrl: "app/modules/unreads.html",
                    controller: 'UnreadsCtrl'
                })
                .state('modules/notices', {
                    url: "/modules/notices",
                    templateUrl: "app/modules/notices.html",
                    controller: 'NoticesCtrl'
                })
                .state('loadDetail', {
                    url: "/detail",
                    templateUrl: "app/home/detail.html",
                    controller: 'DetailCtrl'
                });
        }
    ])
    .run(['$rootScope', 'HistoryService',
        function($rootScope, HistoryService) {
            //记录路由变化
            $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
                HistoryService.stateChange(toState.name, fromState.name, toParams);
            });
        }
    ]);;