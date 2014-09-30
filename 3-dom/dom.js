'use strict'; /* global $ */

var DOMactions = {

    // this method sticks an image into a parent container.
    //
    insertKittenInto: function(parent) {
        var img = '<img src="http://placekitten.com/408/287" class="kitten">';
        $(parent).append(img);
    }
};

