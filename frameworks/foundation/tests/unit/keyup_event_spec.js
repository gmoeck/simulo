describe('Simulo.KeyUpEvent', function() {
  var event;

  describe('#trigger', function() {
    var simulateEventSpy, target, keyUpAttributes, char;

    beforeEach(function() {
      char = 'a';
      target = 'target';
      keyUpAttributes = {
        keyCode: 65,
        which: 65,
        charCode: 0,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false
      };

      event = Simulo.KeyUpEvent.create({char: char, target: target});
      simulateEventSpy = spyOn(SC.Event, 'simulateEvent');
      event.trigger();
    });

    it('generates a simulated event with the proper attributes', function() {
      expect(simulateEventSpy).toHaveBeenCalledWith(target, 'keyup', keyUpAttributes);
    });
  });

  describe('#charCode', function() {
    beforeEach(function() {
      event = Simulo.KeyUpEvent.create();
    });

    it('is always 0', function() {
      expect(event.get('charCode')).toBe(0);
    });
  });

  describe('#keyCode', function() {
    it('is the evaluated key code', function() {
      event = Simulo.KeyUpEvent.create({char: 'a'});

      expect(event.get('keyCode')).toBe(65);

    });
  });
});
