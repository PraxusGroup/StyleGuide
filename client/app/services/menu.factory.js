;(function() {
  'use strict';

  angular
    .module('app')
    .factory('Menu', MenuFactory);

  MenuFactory.$inject = [];

  function MenuFactory() {

    var service = {
      menuItems: getMenuItems,
      activeMenuItem: getActiveMenuItem
    };

    return service;

    ////////////

    function getActiveMenuItem(name) {

      var active = {
        id: false,
        subId: false
      };

      if(!name) return active;

      var menuItems = getMenuItems();

      menuItems.forEach(function(item){
        if (item.name === name)
          active.id = item.id;

        if (item.subMenu) {
          item.subMenu.forEach(function(sub){
            if(sub.name === name) {
              active.id = item.id;
              active.subId = sub.id;
            }

          });
        }
      });

      return active;

    }

    function getMenuItems() {
      var menuItems = [];

      menuItems.push({
        id: 1,
        name: 'main',
        text: 'Style Guide'
      });

      menuItems.push({
        id: 2,
        name: 'colors',
        text: 'Colors'
      });

      menuItems.push({
        id: 3,
        name: false,
        text: 'Elements',
        subMenu: [
          {
            id: 4,
            name: 'item1',
            text: 'Item 1'
          },
          {
            id: 5,
            name: 'item2',
            text: 'Item 2'
          }
        ]
      });

      return menuItems;

    }

  }

})();
