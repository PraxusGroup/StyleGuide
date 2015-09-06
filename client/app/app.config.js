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
        title: 'Praxus Style Guide',
        url: '/main',
        templateUrl: 'app/views/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state({
        name: 'colors',
        title: 'Colors',
        color: 'primary-black',
        url: '/colors',
        templateUrl: 'app/views/colors/colors.html',
        controller: 'ColorsController',
        controllerAs: 'vm'
      })
      .state({
        name: 'item1',
        title: 'Item 1',
        url: '/item1',
        templateUrl: 'app/views/colors/colors.html',
        controller: 'ColorsController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('main');

  }

})();
