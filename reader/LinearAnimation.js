function LinearAnimation(id, span, controlPoint) {
    Animation.call(this, id, span);

    this.span = span;
    this.controlPoint = controlPoint;
    this.totalDist = 0;

    this.cpX = 0;
    this.cpY = 0;
    this.cpZ = 0;
    this.movingX = 0;
    this.movingY = 0;
    this.movingZ = 0;
    this.idx = 0;
    this.paragem = 0;

    this.matrix = [1.0, 0.0, 0.0, 0.0,
                  0.0, 1.0, 0.0, 0.0,
                  0.0, 0.0, 1.0, 0.0,
                  this.cpX, this.cpY, this.cpZ, 1.0];
           
    for(var i = 0; i < this.controlPoint.length-1; i++){
    	var dx = this.controlPoint[0][0]; - this.controlPoint[i][0];
    	var dy = this.controlPoint[i+1][1] - this.controlPoint[i][1];
    	var dz = this.controlPoint[i+1][2] - this.controlPoint[i][2];

    	this.dist2points = Math.sqrt(dx*dx + dy*dy + dz*dz);

        this.totalDist += this.dist2points;

    }

    this.speed = 0.01 * this.totalDist/this.span;
    
}

LinearAnimation.prototype = Object.create(Animation.prototype);
LinearAnimation.prototype.constructor = LinearAnimation;

LinearAnimation.prototype.update = function () {

    this.matrix =  [1.0, 0.0, 0.0, 0.0,
                    0.0, 1.0, 0.0, 0.0,
                    0.0, 0.0, 1.0, 0.0,
                    this.cpX, this.cpY, this.cpZ, 1.0];

    if(this.movingX == 0){
        if(this.cpX - this.animat1x < 0)
            this.cpX += this.speed;
        else
            this.cpX -= this.speed;
    }

    if(this.movingY == 0){
        if(this.cpY - this.animat1y < 0)
            this.cpY += this.speed;
        else
            this.cpY -= this.speed;
    }
    
    if(this.movingZ == 0){
        if(this.cpZ - this.animat1z < 0)
            this.cpZ += this.speed;
        else
            this.cpZ -= this.speed;
    }

    if(this.idx < this.controlPoint.length){
                 
        this.animat1x  = this.controlPoint[this.idx][0];
        this.animat1y  = this.controlPoint[this.idx][1];
        this.animat1z  = this.controlPoint[this.idx][2];
    }

    if(this.idx < this.controlPoint.length - 1 && this.animat1x == this.cpX.toFixed(2) && this.animat1y == this.cpY.toFixed(2) && this.animat1z == this.cpZ.toFixed(2)){
        this.idx+= 1;
        this.movingX = 0;
        this.movingY = 0;
        this.movingZ = 0;
        this.animat1x  = this.controlPoint[this.idx][0];
        this.animat1y  = this.controlPoint[this.idx][1];
        this.animat1z  = this.controlPoint[this.idx][2];
    }
          
    if(this.cpX.toFixed(2) == this.animat1x)
        this.movingX = 1;
    if(this.cpY.toFixed(2) == this.animat1y)
        this.movingY = 1;
    if(this.cpZ.toFixed(2) == this.animat1z)
        this.movingZ = 1;

};