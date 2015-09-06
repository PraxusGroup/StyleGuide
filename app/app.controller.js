;(function() {
  'use strict';

  angular
    .module('app')
    .controller('AppController', AppController);

  AppController.$inject = ['$rootScope', '$state', 'Menu'];

  function AppController($rootScope, $state, Menu){

    var _this = this;

    _this.menu = Menu.menuItems();

    $rootScope.$on('$stateChangeSuccess', generateMenu);

    function generateMenu(event, toState, toParams, fromState, fromParams){
      _this.pageTitle = toState.title;
      _this.navColor = toState.color;
      _this.active = Menu.activeMenuItem(toState.name);
    }

  }

})();
