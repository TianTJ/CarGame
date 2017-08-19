cc.Class({
    extends: cc.Component,

    properties: {
        isleft:false,
        type:0,
    },

    // use this for initialization
    onLoad: function () {
        this.anim = this.getComponent(cc.Animation);
        this.isplaying = false;
    },
    turnDir:function() {
        if(!this.isplaying){
             this.isplaying = true;
            if(this.isleft){
                this.isleft = false;
                if(this.type==0){
                    this.anim.play("blueright");
                }else{
                    this.anim.play("yellowright");
                }
            }else{
                this.isleft = true;
                if(this.type==0){
                    this.anim.play("blueleft");
                }else{
                    this.anim.play("yellowleft");
                }
            }
        }
    },
    actionEnd:function(){
        this.isplaying = false;
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
