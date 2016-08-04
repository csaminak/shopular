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
            login: login
        };
    }

    function login() {
        
    }




})();
