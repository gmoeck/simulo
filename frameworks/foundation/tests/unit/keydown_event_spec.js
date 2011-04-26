describe('Simulo.KeyDownEvent', function() {
  var event;

  describe('#trigger', function() {
    var simulateEventSpy, target, keyDownAttributes, char;

    beforeEach(function() {
      char = 'a';
      target = 'target';
      keyDownAttributes = {
        keyCode: 65,
        which: 65,
        charCode: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false
      };

      event = Simulo.KeyDownEvent.create({char: char, target: target});
      simulateEventSpy = spyOn(SC.Event, 'simulateEvent');
      event.trigger();
    });

    it('generates a simulated event with the proper attributes', function() {
      expect(simulateEventSpy).toHaveBeenCalledWith(target, 'keydown', keyDownAttributes);
    });
  });

  describe('#charCode', function() {
    beforeEach(function() {
      event = Simulo.KeyDownEvent.create();
    });

    it('is always 0', function() {
      expect(event.get('charCode')).toBe(0);
    });
  });

  describe('#keyCode', function() {
    context('when a character key is given', function() {
      beforeEach(function() {
        event = Simulo.KeyDownEvent.create({char: 'a'});
      });

      it('is the evaluated character key code', function() {
        expect(event.get('keyCode')).toBe(65);
      });
    });

    context('when a command key is given', function() {
      beforeEach(function() {
        event = Simulo.KeyDownEvent.create({commandKey: 'enter'});
      });

      it('is the evaluated command key code', function() {
        expect(event.get('keyCode')).toBe(13);
      });
    });
  });
});
