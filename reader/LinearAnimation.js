function LinearAnimation(scene, span, controlPoint) {
    Animation.call(this, scene, span);

    this.controlPoint = controlPoint;

    this.initBuffers();
}

LinearAnimation.prototype = Object.create(Animation.prototype);
LinearAnimation.prototype.constructor = LinearAnimation;

LinearAnimation.prototype.init = function () {

};