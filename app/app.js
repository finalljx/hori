'use strict';

angular.module('hori', ['ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'mobile-angular-ui'])
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            // 找不到任何匹配的路由, 则跳转到登录页
            $urlRouterProvider.otherwise('/login');

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
                .state('loadmore', {
                    url: "/more/:type/:name",
                    templateUrl: "app/home/more.html",
                    controller: 'MoreCtrl'
                })
                .state('loadDetail', {
                    url: "/detail/:type/:name",
                    templateUrl: "app/home/detail.html",
                    controller: 'MoreCtrl'
                })
                .state('loadContact', {
                    url: "/contact",
                    templateUrl: "app/home/contact.html",
                    controller: 'ContactCtrl'
                });
        }
    ]);