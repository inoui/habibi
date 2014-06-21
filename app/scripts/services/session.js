'use strict';

angular.module('habibiApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
