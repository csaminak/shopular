(function(){
    'use strict';

    angular.module('shopular')
        .factory('handleInventory', HandleInventoryService);

    /**
     * Returns an object that contains function to handle inventory and it's items
     * @return     {Object}    contains functions that the service can execute
     */
    function HandleInventoryService() {
        return {
            findAll: findAll,
            addItem: addItem
        };
    }

    var nextId = 17457;
    var inventory = [];

    /**
     * Looks through localStorage and retrieves the data for inventory.
     * @return {Array}     Array with objects that contain info for each item in inventory
     */
    function findAll() {
        //TODO TRY CATCH cause it is always needed with parsing
        return JSON.parse(localStorage.getItem('inventory'));
    }

    /**
     * Takes an item and stores it into localstorage to access later
     * and adds that item into the inventory.
     * @param  {Object}    item     contains the various properties for an item.
     * @return {Object}    newItem  contains relevant info including an id
     */
    function addItem(item) {
        //TODO TRY CATCH cause it is always needed with parsing

        if(!item || !item.name || !item.price) {
            return null;
        }
        if(!item.quantity) {
            item.quantity = 0;
        }
        if(!item.discount) {
            item.discount = 0;
        }
        if(!item.color) {
            item.color = 'n/a';
        }

        var newItem = {
            'id': nextId,
            'name': item.name,
            'price': item.price,
            'quantity': item.quantity,
            'color': item.color,
            'discount': item.discount
        };

        nextId++;
        inventory.push(newItem);
        localStorage.setItem('inventory', angular.toJson(inventory));
        return newItem;
    }




})();
