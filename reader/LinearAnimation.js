function LinearAnimation(scene, span, controlPoint) {
    Animation.call(this, scene, span);

    this.span = span;
    this.controlPoint = controlPoint;
    this.totalDist = 0;

    for(var i = 0; i < this.controlPoint.length-1; i++){
    	var dx = this.controlPoint[i+1][0] - this.controlPoint[i][0];
    	var dy = this.controlPoint[i+1][1] - this.controlPoint[i][1];
    	var dz = this.controlPoint[i+1][2] - this.controlPoint[i][2];

    	this.dist2points = Math.sqrt(dx*dx + dy*dy + dz*dz);
    
    	this.totalDist += this.dist2points;

    }

    this.speed = this.totalDist/this.span;

}

LinearAnimation.prototype = Object.create(Animation.prototype);
LinearAnimation.prototype.constructor = LinearAnimation;

LinearAnimation.prototype.init = function () {

};