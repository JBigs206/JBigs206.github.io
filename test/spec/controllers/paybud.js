'use strict';

describe('Controller: PaybudCtrl', function () {

  // load the controller's module
  beforeEach(module('jbigs206githubioApp'));

  var PaybudCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PaybudCtrl = $controller('PaybudCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PaybudCtrl.awesomeThings.length).toBe(3);
  });
});
