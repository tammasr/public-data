(function () {
    'use strict';

    angular
        .module('gulpJavascriptProject')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('contact', {
                url: '/',
                templateUrl: 'app/contact/contact.html',
                controller: 'ContactController',
                controllerAs: 'ctrl'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
