
;(function(){

    'use strict'; /* global $,describe,it,expect,beforeEach,afterEach */

    describe('DOM Actions', function DOMActionTestSuite() {

        // set up the DOM required by our "plugin".
        // no need to clean it up between tests.
        //
        beforeEach(function BeforeDOM() {
            setFixtures('<div id="imageContainer"></div>');
        });

        it('should insert an image tag with class "kitten"', function InsertImageTest() {
            DOMactions.insertKittenInto('#imageContainer');
            expect($('#imageContainer')).toContainElement('img.kitten');
        });
    });
}());
