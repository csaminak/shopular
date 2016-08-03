(function() {
    'use strict';

    angular.module('shopular', []);

})();

(function(){
    'use strict';

    angular.module('shopular')
        .factory('handleInventory', HandleInventoryService);


    function HandleInventoryService() {
        return {
            findAll: findAll,
            addItem: addItem,
            updateAll: updateAll
        };
    }

    var nextId = 17457;

    var inventory;

    function findAll() {
        inventory = JSON.parse(localStorage.getItem('inventory'));
        return inventory;
    }

    /**
     * Takes an item and stores it into localstorage to access later
     * and adds that item into the inventory.
     * @param  {Object}    item     contains the various properties for an item.
     * @return {Object}    newItem  contains relevant info including an id
     */
    function addItem(item) {
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


    function updateAll() {
        console.log('update');
    }




})();

(function() {
    'use strict';

    angular.module('shopular')
        .controller('InventoryController', InventoryController);

    InventoryController.$inject = ['handleInventory'];

    /**
     * A constructor function that creates a scope with various properties.
     */
    function InventoryController(handleInventory) {
        var that = this;
        this.changeSorting = changeSorting;
        this.sortType = 'price - discount';
        this.sortReverse = false;
        this.totalPrice = totalPrice;
        this.inventory = handleInventory.findAll();
        this.newItem = {};
        this.addItem = handleInventory.addItem;


        /**
         * Accepts a sorting type string and sets the sortType to that value
         * and then sets sortReverse to be the opposite of what it was previously.
         * @param  {String}     sortType        Property name for sorting type
         * @return {Boolean}    sortReverse     Boolean value
         */
        function changeSorting(sortType) {
            that.sortType = sortType;
            that.sortReverse = !that.sortReverse;
            return that.sortReverse;
        }
    }


    var tax = 0.0575;

    /**
     * Calculates the total price for an individual item.
     * @param  {Object}     item    contains data about item
     * @return {Number}             item price
     */
    function totalPrice(item) {
        return (item.price - item.discount) * (1 + tax);
    }

})();

//# sourceMappingURL=main.js.map