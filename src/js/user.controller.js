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
            that.newUser = userMgmt.login(user.username);
            that.newUser = {};
        }
    }




})();
