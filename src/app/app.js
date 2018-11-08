'use stric'

var app = angular.module('mi-app', [
    'ui.router'
])

app.config( function ($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'view/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        });

    $urlRouterProvider.otherwise('/home');
})