
;(function(){

    'use strict'; /* global describe,it,expect,beforeEach,afterEach */

    // simple, generic test
    function isArraySorted(arr) {
        for (var i = 1, ct = arr.length; i < ct; ++i) {
            if (arr[i-1] > arr[i])
                return false;
        }
        return true;
    }

    describe('Custom Matcher', function CustomMatcherSuite() {

        var customMatchers = {

            toBeSorted: function ToBeSorted() {
                return {
                    compare: function(actualArray) {
                        var isSorted = isArraySorted(actualArray);
                        return {
                            pass:    isSorted,
                            message: isSorted
                                ? "Expected [" + actualArray + "] to be sorted"
                                : "Expected [" + actualArray + "] to be sorted, but it wasn't"
                        };
                    }
                };
            }
        };

        beforeEach(function BeforeCustom() {
            jasmine.addMatchers(customMatchers);
        });

        it('should insert a book and stay sorted', function InsertBookTest() {
            BookShelf.addBook("Silmarillion");
            expect(BookShelf.books).toBeSorted();
        });
    });
}());
