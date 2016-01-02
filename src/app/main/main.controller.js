(function () {
    'use strict';

  /*
   Todo: Please provide description
   @author: 
   @date: 12/26/15
   @time: 10:19 PM
   */
  
    angular
        .module('gulpJavascriptProject')
        .controller('MainController', MainController);


    /** @ngInject */
    function MainController($q) {
        var vm = this;
        vm.defer = $q.defer(); //defer object

        vm.defer.promise.then(function (weapon) {
                alert("You can have my" + weapon);
                return "bow";
            })
            .then(function (bow) {
                alert("Here is your" + bow);
            });

        vm.defer.resolve("sword");
    }
})();



