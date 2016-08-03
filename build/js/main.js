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

    var nextId = 1;

    var inventory = [
        { 'id': 2957, 'name': 'widget', 'price': 32, 'quantity': 203,
                                                'color': 'red', 'discount': 31 },
        { 'id': 89274, 'name': 'golf club', 'price': 98, 'quantity': 10,
                                                'color': 'black', 'discount': 0 },
        { 'id': 64, 'name': 'iPhone', 'price': 499, 'quantity': 2,
                                                'color': 'white', 'discount': 0 },
        { 'id': 87363, 'name': 'bonzai tree', 'price': 76, 'quantity': 2,
                                                'color': 'green', 'discount': 0 },
        { 'id': 1736, 'name': 'towel', 'price': 55, 'quantity': 30,
                                                'color': 'brown', 'discount': 10 },
        { 'id': 4836, 'name': 'dog bed', 'price': 99, 'quantity': 10,
                                                'color': 'beige', 'discount': 50 },
        { 'id': 829, 'name': 'waste basket', 'price': 15, 'quantity': 40,
                                                'color': 'silver', 'discount': 0 },
        { 'id': 46, 'name': 'guitar', 'price': 899, 'quantity': 3,
                                                'color': 'blue', 'discount': 150 },
        { 'id': 17456, 'name': 'matcha tea', 'price': 42, 'quantity': 4,
                                                'color': 'green', 'discount': 11 },
        { 'id': 3292, 'name': 'enlightenment', 'price': 99999, 'quantity': 1,
                                                'color': 'red', 'discount': 0 },
        { 'id': 533, 'name': 'eggs', 'price': 5, 'quantity': 12,
                                                'color': 'brown', 'discount': 1 },
        { 'id': 683, 'name': 'pillow', 'price': 27, 'quantity': 10,
                                                'color': 'black', 'discount': 12 }
    ];

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
        localStorage.setItem('inventory', JSON.stringify(inventory));
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
    function InventoryController(HandleInventoryService) {
        var that = this;
        this.changeSorting = changeSorting;
        this.sortType = 'price - discount';
        this.sortReverse = false;
        this.totalPrice = totalPrice;
        this.inventory = HandleInventoryService.findAll();
        this.newItem = {};
        this.addItem = HandleInventoryService.addItem();


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