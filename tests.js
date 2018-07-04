describe('Testing a Hello World controller', function() {
  var $scope = null;
  var ctrl = null;

  //you need to indicate your module in a test
  beforeEach(module('deckOfCardApp'));

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();

    ctrl = $controller('CardController', {
      $scope: $scope
    });
  }));

	   it('Card has drawn ', function() {
		expect(ctrl.numberOfCard).toBeGreaterThan('0');
	  });
	
	it('has required methods shuffle and sort', function() {
        expect(typeof ctrl.shuffleCard).toBe('function');
        expect(typeof ctrl.sortCard).toBe('function');
      });
      
});