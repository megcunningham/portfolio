angular
  .module('portfolio')

  .config(function($routeProvider) {
    $routeProvider
       .when('/landing', {
      	templateUrl:'www/templates/landing.html',
      	controller: 'landingCtrl'
      });
  });