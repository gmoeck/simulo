var Simulo = {
  clickOn: function(selector) {
    var pageElement = Simulo.PageElement.create({selector: selector});
    SC.RunLoop.begin();
    waits(1);
    runs(function() {
      pageElement.click();
    });
    SC.RunLoop.end();
    return pageElement;
  },

  pressEnter: function(selector) {
    var pageElement = Simulo.PageElement.create({selector: selector});
    SC.RunLoop.begin();
    waits(1);
    runs(function() {
      pageElement.pressEnter();
    });
    SC.RunLoop.end();
    return pageElement;
  },

  fillIn: function(selector, value) {
    var pageElement = Simulo.PageElement.create({selector: selector});
    SC.RunLoop.begin();
    waits(1);
    runs(function() {
      pageElement.click();
      pageElement.fillInWith(value);
    });
    SC.RunLoop.end();

    return pageElement;
  }
};
