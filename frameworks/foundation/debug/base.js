var Simulo = {
  clickOn: function(selector) {
    var pageElement = Simulo.PageElement.create({selector: selector});
    SC.RunLoop.begin();
    waits(1);
    runs(function() {
      pageElement.click();
    });
    SC.RunLoop.end();
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
  }
};
