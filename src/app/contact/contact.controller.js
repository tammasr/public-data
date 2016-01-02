(function() {
    'use strict';

    angular
        .module('gulpJavascriptProject')
        .controller('ContactController', ContactController);

    /** @ngInject */
    function ContactController() {
        var vm = this;

        vm.contacts = ["Jim", "Kate", "Bob"];
    }
})();
