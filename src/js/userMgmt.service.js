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


    function login(username) {
        return {
            'username': username,
            'time': new Date()
        };
    }

    function getUser(username) {
        var theUser = null;

        if(!username) {
            return theUser;
        } else {
            theUser = username;
        }

        return theUser;
    }


})();
