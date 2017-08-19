cc.Class({
    extends: cc.Component,

    properties: {
        speed:0
    },

    // use this for initialization
    onLoad: function () {
        this.size = cc.director.getWinSize();
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
         this.node.y += this.speed * dt;
        if (this.node.y <= -this.size.height/2-40) {
            this.node.removeFromParent();
            this.node.destroy();
        }
        if(this.car!=null&&this.detectCollision()){
            cc.director.loadScene('Game');
        }
        
    },
    detectCollision () {//矩形碰撞
        var x1 = this.node.x-this.node.width/2;
        var y1 = this.node.y-this.node.height/2;
        var w1 = this.node.width;
        var h1 = this.node.height;
        var x2 = this.car.node.x-this.car.node.width/2+40;
        var y2 = this.car.node.y-this.car.node.height/2+40;
        var w2 = this.car.node.width-80;
        var h2 = this.car.node.height-80;
        
        if (x1 >= x2 && x1 >= x2 + w2) {  
            return false;  
        } else if (x1 <= x2 && x1 + w1 <= x2) {  
            return false;  
        } else if (y1 >= y2 && y1 >= y2 + h2) {  
            return false;  
        } else if (y1 <= y2 && y1 + h1 <= y2) {  
            return false;  
        }  
        return true;  
        
    }
});
