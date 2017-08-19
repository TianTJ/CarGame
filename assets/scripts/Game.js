var Car = require("Car");

cc.Class({
    extends: cc.Component,

    properties: {
        bluecar:{
            default:null,
            type:Car
        },
          //分数label
        score:{
            default:null,
            type:cc.Label
        },
        yellowcar:{
            default:null,
            type:Car
        },
        bluestar:{
            default:null,
            type:cc.Prefab
        },
        yellowstar:{
            default:null,
            type:cc.Prefab
        },
        blueobj:{
            default:null,
            type:cc.Prefab
        },
        yellowobj:{
            default:null,
            type:cc.Prefab
        },
        objlayer:{
            default:null,
            type:cc.Node
        },
        createtime:1.6 //创建间隔
    },

    // use this for initialization
    onLoad: function () {
    
        this.fenshu = 0;
        this.size = cc.director.getWinSize();
        
        this.setInputControl();
        
        //this.schedule(this.spawnStar,1);
        //产生左边星星或道具
        this.schedule(this.spawnBuleStar,this.createtime);
        //产生右边星星或道具
        this.schedule(this.spawnYellowStar,this.createtime);
    },
    gainScore :function(){
        this.fenshu += 1;
        //更新分数
        this.score.string = this.fenshu.toString();
    },
    setInputControl: function() {
        var self = this;
        
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: self._onTouchBegan.bind(self)
        }, self);
    },
    _onTouchBegan: function(touch, event){
        //cc.log("%f %f",touch.getLocation().x,touch.getLocation().y);
        if(touch.getLocation().x<this.size.width/2){
            this.bluecar.turnDir();
        }else{
            this.yellowcar.turnDir();
        }
        return true;
    },
    spawnBuleStar: function() {
        // 使用给定的模板在场景中生成一个新节点
        var type = parseInt(cc.random0To1()*2);
        if(type==0){
             var newStar = cc.instantiate(this.bluestar);
            newStar.getComponent('Star').car = this.bluecar;
            this.objlayer.addChild(newStar);
            newStar.setPosition(this.getNewStarPosition(0));
        }else{
            var newObj = cc.instantiate(this.blueobj);
            newObj.getComponent('Obj').car = this.bluecar;
            this.objlayer.addChild(newObj);
            newObj.setPosition(this.getNewStarPosition(0));
        }
       
    },
    spawnYellowStar: function() {
         var type = parseInt(cc.random0To1()*2);
        if(type==0){
             var newStar = cc.instantiate(this.yellowstar);
             newStar.getComponent('Star').car = this.yellowcar;
            this.objlayer.addChild(newStar);
            newStar.setPosition(this.getNewStarPosition(1));
        }else{
            var newObj = cc.instantiate(this.yellowobj);
            newObj.getComponent('Obj').car = this.yellowcar;
            this.objlayer.addChild(newObj);
            newObj.setPosition(this.getNewStarPosition(1));
        }
    },
    getNewStarPosition: function(type) {
        var randX;
        var randY;
        if(type==0){
            //随机左边还是右边
            var randdir = parseInt(cc.random0To1()*2);
            if(randdir==0){
                randX = -186;
                //随机y位置
               
            }else{
                randX = -63;
                //随机y位置
            }
        }else if(type==1){
            var randdir = parseInt(cc.random0To1()*2);
            if(randdir==0){
                randX = 63;
                //随机y位置
            }else{
                randX = 183;
                //随机y位置
            }
        }
         randY = parseInt(cc.random0To1()*50)+532;
        
        // 返回星星坐标
        return cc.p(randX, randY);
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
