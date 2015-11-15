function CircularAnimation(id, span, center, radius, startang, rotang) {
    Animation.call(this, id, span);

    this.center = center;
    this.radius = radius;
    this.span = span;
    this.startang = startang;
    this.rotang = rotang;

    this.currentPos = 0;

    this.matrix = mat4.create();

    this.CircMatrix = mat4.create();
    var sign;

    if(this.rotang > 0)
        sign = Math.PI/2;
    else
        sign = -Math.PI/2;

    mat4.identity(this.CircMatrix);
    mat4.rotateY(this.CircMatrix, this.CircMatrix, this.startang);
    mat4.translate(this.CircMatrix, this.CircMatrix, vec3.fromValues(0, 0, this.radius));
    mat4.rotateY(this.CircMatrix, this.CircMatrix, sign);

}

CircularAnimation.prototype = Object.create(Animation.prototype);
CircularAnimation.prototype.constructor = CircularAnimation;

CircularAnimation.prototype.update = function () {

    var step = this.span/1000;

    this.currentPos = Math.min(this.span, this.currentPos + step);

	mat4.identity(this.matrix);
    mat4.translate(this.matrix, this.matrix, this.center);

    var ang = this.rotang * (this.currentPos / this.span);
    mat4.rotateY(this.matrix, this.matrix, ang);

    mat4.multiply(this.matrix, this.matrix, this.CircMatrix);

};