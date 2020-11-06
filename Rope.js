class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB


        this.bodyA = Constraint.create(options);
        World.add(world, this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
        

        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
            line(pointA.x-15, pointA.y, pointB.x-20, pointB.y);
            line(pointA.x+23, pointA.y, pointB.x+30, pointB.y);

        }
    }
    
}

