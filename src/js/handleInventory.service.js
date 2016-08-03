(function(){
    'use strict';

    angular.module('shopular')
        .factory('handleInventory', HandleInventoryService);

    HandleInventoryService.$inject = ['inventory'];

    function HandleInventoryService() {

    }



})();
