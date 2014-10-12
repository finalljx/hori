'use strict';

angular.module('hori', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'mobile-angular-ui'])
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
                .state('home.route1', {
                    url: "/route1",
                    template: "route1"
                })
                .state('home.route2', {
                    url: "/route2",
                    template: "route2"
                });
        }
    ]);