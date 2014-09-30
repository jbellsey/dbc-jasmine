
;(function(){

    'use strict'; /* global $,xdescribe,describe,it,beforeEach,afterEach,expect,spyOn */

    describe('MealPlan', function MealPlanTest() {

        xdescribe('Object', function MealPlanBasicTests() {

            it('should have a "cost" property', function shouldHaveCost() {
                expect(MealPlan.cost).toBeDefined();
            });
            it('should NOT have a "costx" property', function shouldNotHaveCostX() {
                expect(MealPlan.costx).not.toBeDefined();
            })
        });

        describe('Cost Updater', function CostUpdater() {

            it('should invoke "calculateCost" and store its result', function shouldInvokeRecalc() {

                // intercept ("mock") the expensive calcuation.
                // here we completely replace the function
                //
                spyOn(MealPlan, 'calculateCost').and.returnValue(99);

                // run the update method, which should invoke the calculateCost method
                //
                MealPlan.updateRecipe(4,5,6);

                // was our mock invoked?
                //
                expect(MealPlan.calculateCost).toHaveBeenCalledWith(4,5,6);

                // was the value stored?
                //
                expect(MealPlan.cost).toEqual(99);
            });


            it('should invoke the "recalculate" replacement method', function shouldInvokeRecalc() {

                // use a replacement function
                //
                spyOn(MealPlan, 'calculateCost').and.callFake(function fakeCalculateCost(a,b,c) {
                    return 10*(a+b+c);
                });
                MealPlan.updateRecipe(4,5,6);

                // same tests, but the return value is different because of the replacement function
                //
                expect(MealPlan.calculateCost).toHaveBeenCalledWith(4,5,6);
                expect(MealPlan.cost).toEqual(150);

                // another way to look at the arguments passed to a spy.
                // use this when "toEqual" is insufficient (that's what is
                // used in "toHaveBeenCalledWith"). e.g., jQuery object tests,
                // toBeDefined, etc
                //
                var args = MealPlan.calculateCost.calls.mostRecent().args;
                expect(args[0]).toBeLessThan(7);


                // count the number of invocations
                //
                expect(MealPlan.calculateCost.calls.count()).toEqual(1);
            });
        });
    });


}());
