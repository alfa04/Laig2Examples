function plane(scene, nrDivs) {
    CGFobject.call(this,scene);
    this.nrDivs = nrDivs;
        
    this.surface = null;
    this.translations = [];
 this.sca = [ 5.0, 0.0, 0.0, 0.0,
                0.0, 5.0, 0.0, 0.0,
                0.0, 0.0,5.0, 0.0,
                0.0, 0.0, 0.0, 1.0  ];
    this.testAppearance = new CGFappearance(this.scene);

//  console.log("ok");
    this.texture = new CGFtexture(this.scene, "textures/texture.jpg");
    this.testAppearance.setTexture(this.texture);
    this.testAppearance.setTextureWrap ('REPEAT', 'REPEAT');
    
    this.makeSurface("0", 1, // degree on U: 2 control vertexes U
                                         1, // degree on V: 2 control vertexes on V
                                        [0, 0, 1, 1], // knots for U
                                        [0, 0, 1, 1], // knots for V
                                        [       // U = 0
                                                [ // V = 0..1;
                                                        [-0.5, 0.0, 0.5, 1 ],
                                                         [-0.5,  0.0, -0.5, 1 ]
                                                       
                                                ],
                                                // U = 1
                                                [ // V = 0..1
                                                         [ 0.5, 0.0, 0.5, 1 ],
                                                         [ 0.5,  0.0, -0.5, 1 ]                                                   
                                                ]
                                        ],
                      //translation of surface 
                    [0,0,0]);
    

    this.texCoords = [];
    for (var i = 0; j <= this.nrDivs; j++) 
    {
        for (var j = 0; i <= this.nrDivs; i++) 
        {
            this.texCoords.push(i);
        }
    }

}

plane.prototype = Object.create(CGFscene.prototype);
plane.prototype.constructor = plane;

plane.prototype.makeSurface = function (id, degree1, degree2, knots1, knots2, controlvertexes, translation) {
        
    var nurbsSurface = new CGFnurbsSurface(degree1, degree2, knots1, knots2, controlvertexes);
    
    getSurfacePoint = function(u, v) {
    return nurbsSurface.getPoint(u, v);
    };

    this.surface = new CGFnurbsObject(this.scene, getSurfacePoint, this.nrDivs, this.nrDivs);

}

plane.prototype.display = function () 
{

        this.scene.pushMatrix();
    this.scene.scale(15,5,15);
        //this.scene.translate(this.translations[0], this.translations[1], this.translations[2]);
        this.surface.display();
        this.scene.popMatrix();
}