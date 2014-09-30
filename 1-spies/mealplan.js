var MealPlan = {

    cost: 0,

    // new recipe components have been chosen
    //
    updateRecipe: function updateRecipe(a,b,c) {
        this.cost = this.calculateCost(a,b,c);
    },

    // this is an EXPENSIVE calculation! maybe does
    // a lot of DB querying, or AJAX requests
    //
    calculateCost: function calculateCost(a,b,c) {
        return a + b + c;
    }
};

