function LinearAnimation(scene, span, controlPoint) {
    Animation.call(this, scene, span);

    this.controlPoint = controlPoint;

    for(var i = 0; i < controlPoint.length; i++){

    	var dx = this.controlPoint[i+1][0] - this.controlPoint[i][0];
    	var dy = this.controlPoint[i+1][1] - this.controlPoint[i][1];
    	var dz = this.controlPoint[i+1][2] - this.controlPoint[i][2];
    }

    this.initBuffers();
}

LinearAnimation.prototype = Object.create(Animation.prototype);
LinearAnimation.prototype.constructor = LinearAnimation;

LinearAnimation.prototype.init = function () {

};