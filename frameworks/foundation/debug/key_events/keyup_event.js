sc_require('debug/key_events/base');

Simulo.KeyUpEvent = Simulo.KeyEvent.extend({
  eventAttributes: function() {
    var attributes = {
      keyCode:  this.get('keyCode'),
      which:    this.get('keyCode'),
      charCode: this.get('charCode'),
      altKey:   this.get('altKey'),
      ctrlKey:  this.get('ctrlKey'),
      metaKey:  this.get('metaKey'),
      shiftKey: this.get('shiftKey')
    };
    return attributes;
  }.property('keyCode', 'charCode', 'altKey', 'ctrlKey', 'metaKey', 'shiftKey').cacheable(),

  charCode: 0,

  keyCode: function() {
    return this.get('keyCodes')[this.get('char').toLowerCase()];
  }.property('char').cacheable(),


  trigger: function() {
    SC.Event.simulateEvent(this.get('target'), 'keyup', this.get('eventAttributes'));
  }
});
