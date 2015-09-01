;(function() {
  'use strict';

  angular
    .module('app')
    .config(AppConfig);

  AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function AppConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state({
        name: 'main',
        url: '/main',
        templateUrl: 'app/views/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('main');

  }

})();
