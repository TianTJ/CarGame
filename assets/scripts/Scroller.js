cc.Class({
    //-- 继承
    extends: cc.Component,
    //-- 属性
    properties: {
        //-- 滚动的速度
        speed: 0,
        //-- X轴边缘
        resetY: 0
    },

    init (speedMod) {
        this.speed *= speedMod;
    },
    //-- 更新
    update (dt) {
        this.node.y += this.speed * dt;
        if (this.node.y <= this.resetY) {
            this.node.y -= this.resetY;
        }
    }
});
