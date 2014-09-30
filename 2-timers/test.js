
var obj = {
    method: function() {}
};
var fn = function() {}
/* global spyOn,expect */

// creating spies
spyOn(obj,'method').and.callThrough();
spyOn(obj,'method').and.returnValue(0);
spyOn(obj,'method').and.callFake(fn);
var newSpy = jasmine.createSpy('mySpy');

// testing spies
expect(obj.method.calls.count()).toEqual(1);
expect(obj.method).toHaveBeenCalledWith('param1','param2');

var args = obj.method.calls.mostRecent().args;
expect(args[0]).toBeLessThan(7);

newSpy ++;

var $checkbox = 0, $div = 0, $h1 = 0, $btn = {trigger:function(s) {}}, eventSpy;

expect($div.toExist());
expect($div.toBeEmpty());
expect($div.toBeVisible());
expect($div.toHaveClass('active'));
expect($h1.toContainText('title'));
expect($checkbox.toBeChecked());

// event spies
eventSpy = spyOnEvent('#buy-button', 'click');
$btn.trigger('click');
expect('click').toHaveBeenTriggeredOn('#buy-button');

