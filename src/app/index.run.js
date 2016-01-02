(function() {
  'use strict';

  angular
    .module('gulpJavascriptProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
