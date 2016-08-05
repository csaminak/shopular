(function() {
    'use strict';

    angular.module('shopular', []);

})();

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
        JSON.parse(localStorage.getItem('inventory'));

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
            handleInventory.addItem(item);
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

(function() {
    'use strict';

    angular.module('shopular')
        .controller('UserController', UserController);

    UserController.$inject = ['userMgmt'];

    function UserController(userMgmt) {
        var that = this;
        this.login = login;
        this.getUser = userMgmt.getUser;
        this.newUser = {};

        function login(user) {
            userMgmt.login(user.username);
            that.newUser = {};
        }
    }




})();

(function(){
    'use strict';

    angular.module('shopular')
        .factory('userMgmt', UserMgmtService);

    /**
     * return an object that contains data and functions to handle the service
     * @return      {Object}    contains data relevant to the service
     */
    function UserMgmtService() {
        return {
            login: login,
            getUser: getUser
        };
    }

    var user = null;

    function login(username) {
        if(!username) {
            return;
        }
        user =  {
            'username': username,
            'time': new Date()
        };
        return(user);
    }


    function getUser() {
        return user;
    }


})();

//# sourceMappingURL=main.js.map