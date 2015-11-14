function patch(scene, order ,partsU, partsV, controlPoints){
	if(order == 1){
		knots = [0, 0, 1, 1];
	}else if(order == 2){
		knots = [0, 0, 0, 1, 1, 1];
	}else if(order == 3){
		knots = [0, 0, 0, 0, 1, 1, 1, 1];
	}else{
		console.error("Only order between 1 and 3");
		return;
	}
	
	var nurbsSurface = new CGFnurbsSurface(order, order, knots, knots, controlPoints);
	getSurfacePoint = function(u, v) {
		return nurbsSurface.getPoint(u, v);
	};

    CGFnurbsObject.call(this,scene, getSurfacePoint, partsU, partsV);
}

patch.prototype = Object.create(CGFnurbsObject.prototype);
patch.prototype.constructor = patch;

patch.prototype.scaleTexCoords = function(ampS, ampT) {}