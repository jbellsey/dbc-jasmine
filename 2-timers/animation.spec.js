
;(function(){

    'use strict'; /* global describe,it,beforeEach,afterEach,expect */

    describe('Animation', function AnimationTest() {

        // install mock timer
        //
        beforeEach(function BeforeAnimationTests() {
            jasmine.clock().install();
        });
        afterEach(function AfterAnimationTests() {
            jasmine.clock().uninstall();
        });

        it('should not run the animation synchronously', function shouldNotRunAnimSync() {

            myAnimation.run();
            expect(myAnimation.hasAnimationRun).toBeFalsy();
        });

        it('should run the animation Asynchronously', function shouldRunAnimAsync() {

            // initiate an async event
            //
            myAnimation.run();

            // move the mock timer forward the right amount
            //
            jasmine.clock().tick(myAnimation.animationLength);

            // and NOW it should have completed
            //
            expect(myAnimation.hasAnimationRun).toBeTruthy();
        });
    });
}());

