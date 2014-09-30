
;(function(){

    'use strict'; /* global $, describe,it,expect */

    describe('Ajax', function AjaxTest() {

        // note the use of the "onComplete" callback we're given
        //
        it("successfully tests asynch API call", function AsyncTests(onComplete){

            // initiate an AJAX request, which passes
            // back a jQuery promise
            //
            var $promise = OffsiteAPI.retrieveData();

            $promise
                .done(function PromiseDone(data) {

                    // validate the data here:
                    //
                    expect(data).toBeDefined();
                })
                .always(onComplete);    // <= this is the key; it closes the test
        });
    });
}());
