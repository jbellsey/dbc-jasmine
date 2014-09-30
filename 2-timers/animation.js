'use strict';

var myAnimation = {

    animationLength: 1000,
    hasAnimationRun: false,

    run: function RunAnimation() {
        var self = this;

        // this pretend animation is super-simple:
        // (1) pause, then (2) flag the animation as completed
        //
        setTimeout(function AnimationCallback() {
            self.hasAnimationRun = true;
        }, self.animationLength)
    }
};

