'use strict'; /* global $ */

var OffsiteAPI = {

    gotData: false,

    // offsite asynchronous API call to randomuser.me
    //
    retrieveData: function RetrieveData() {
        var self = this;

        // use the promise interface to $.ajax.
        // the return value is also a promise
        //
        return $.ajax('http://api.randomuser.me/')
            .done(function AjaxDoneCallback(data) {
                self.gotData = true;
            });
    }
};
