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
        this.addItem = addItem;


        /**
         * Takes the item submitted and saves it into newItem after it has
         * passed into the service function. Then sets newItem to empty to
         * reset field.
         * which does other things to it.
         * @param {Object}  item   item to add into inventory with properties
         */
        function addItem(item) {
            that.newItem = handleInventory.addItem(item);
            that.newItem = {};
        }

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
