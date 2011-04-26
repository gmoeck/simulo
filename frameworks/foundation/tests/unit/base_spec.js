describe('Simulo', function() {
  var pageElement, createsPageElementSpy, selector;
  beforeEach(function() {
    pageElement = {click: function() {}, fillInWith: function() {}, pressEnter: function() {}};
    selector = '#someId';
    createsPageElementSpy = spyOn(Simulo.PageElement, 'create').andReturn(pageElement);
  });

  describe('.clickOn', function() {
    var value, clickSpy;

    beforeEach(function() {
      clickSpy = spyOn(pageElement, 'click');

      Simulo.clickOn(selector);
    });

    it('creates a page element', function() {
      expect(createsPageElementSpy).toHaveBeenCalledWith({selector: selector});
    });

    it('tells the element to click on itself', function() {
      expect(clickSpy).toHaveBeenCalled();
    });
  });

  describe('.pressEnter', function() {
    var value, clickSpy;

    beforeEach(function() {
      pressEnterSpy = spyOn(pageElement, 'pressEnter');

      Simulo.pressEnter(selector);
    });

    it('creates a page element', function() {
      expect(createsPageElementSpy).toHaveBeenCalledWith({selector: selector});
    });

    it('tells the element to press enter on itself', function() {
      expect(pressEnterSpy).toHaveBeenCalled();
    });

  });

  describe('.fillIn', function() {
    var value, clickSpy, fillInWithSpy;

    beforeEach(function() {
      value = 'something';
      fillInWithSpy = spyOn(pageElement, 'fillInWith');
      clickSpy = spyOn(pageElement, 'click');

      Simulo.fillIn(selector, value);
    });

    it('creates a page element', function() {
      expect(createsPageElementSpy).toHaveBeenCalledWith({selector: selector});
    });

    it('tells the element to click on itself', function() {
      expect(clickSpy).toHaveBeenCalled();
    });

    it('tells the element to fill in itself with the passed in value', function() {
      expect(fillInWithSpy).toHaveBeenCalledWith(value);
    });
  });
});
