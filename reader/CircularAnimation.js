function CircularAnimation(scene, span, center, radius, startang, rotang) {
    Animation.call(this.scene, span);

    this.center = center;
    this.radius = radius;
    this.startang = startang;
    this.rotang = rotang;

    

    this.initBuffers();
}

CircularAnimation.prototype = Object.create(Animation.prototype);
CircularAnimation.prototype.constructor = CircularAnimation;

CircularAnimation.prototype.init = function () {

};