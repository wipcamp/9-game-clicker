var game = new Phaser.Game(337.5, 600, Phaser.AUTO, "game");
var main = { preload : preload , create: create , update : update};
game.state.add('main', main);
game.state.start('main');
function preload() {
    game.load.image('tower', 'images/tower.png');
    game.load.image('background', 'images/sea.png');
    game.load.image('button','images/button.png')
}
var sprite;
var textScore;
var score;
var textMoney;
var money;
var button1,button2,button3,button4;
var count1,count2,count3,count4;
var text1,text2,text3,text4;
var textp1,textp2,textp3,textp4;
var price1,price2,price3,price4;
var textPrice1,textPrice2,textPrice3,textPrice4;
var time;
var mainClicker;
function create() {
    time=0;
    score=0;
    money=0;
    count1=0;
    count2=0;
    count3=0;
    count4=0;
    price1 = 100;
    price2 = 1000;
    price3 = 5000;
    price4 = 10000;
    game.add.image(0,0,'background');
    mainClicker = game.add.button(game.world.width/2,game.world.height*(3/10),'tower' ,clicker ,this);
    button1 = game.add.button(game.world.width*(6/7)-10, game.world.height*(5/10), 'button', buy1, this);
    button2 = game.add.button(game.world.width*(6/7)-10, game.world.height*(6.2/10), 'button', buy2, this);
    button3 = game.add.button(game.world.width*(6/7)-10, game.world.height*(7.4/10), 'button', buy3, this);
    button4 = game.add.button(game.world.width*(6/7)-10, game.world.height*(8.6/10), 'button', buy4, this);
    mainClicker.anchor.set(0.5);
    button1.scale.setTo(0.50, 0.50);
    button2.scale.setTo(0.50, 0.50);
    button3.scale.setTo(0.50, 0.50);
    button4.scale.setTo(0.50, 0.50);
    text1 = game.add.text(10,game.world.height*(5/10),"Sampan : "+count1,{fontSize : "15px",fill : "#ed3465"});
    text2 = game.add.text(10,game.world.height*(6.2/10),"Sailboat : "+count2,{fontSize : "15px",fill : "#ed3465"});
    text3 = game.add.text(10,game.world.height*(7.4/10),"Barque : "+count3,{fontSize : "15px",fill : "#ed3465"});
    text4 = game.add.text(10,game.world.height*(8.6/10),"Battleship : "+count4,{fontSize : "15px",fill : "#ed3465"});
    textp1 = game.add.text(10,game.world.height*(5/10)+20,"productivity : "+count1*5,{fontSize : "15px",fill : "#ed3465"});
    textp2 = game.add.text(10,game.world.height*(6.2/10)+20,"productivity : "+count2*50,{fontSize : "15px",fill : "#ed3465"});
    textp3 = game.add.text(10,game.world.height*(7.4/10)+20,"productivity : "+count3*150,{fontSize : "15px",fill : "#ed3465"});
    textp4 = game.add.text(10,game.world.height*(8.6/10)+20,"productivity : "+count4*300,{fontSize : "15px",fill : "#ed3465"});
    textPrice1 = game.add.text(10,game.world.height*(5/10)+40,"price : "+price1,{fontSize : "15px",fill : "#ed3465"});
    textPrice2 = game.add.text(10,game.world.height*(6.2/10)+40,"price : "+price2,{fontSize : "15px",fill : "#ed3465"});
    textPrice3 = game.add.text(10,game.world.height*(7.4/10)+40,"price : "+price3,{fontSize : "15px",fill : "#ed3465"});
    textPrice4 = game.add.text(10,game.world.height*(8.6/10)+40,"price : "+price4,{fontSize : "15px",fill : "#ed3465"});
    textScore = game.add.text(10,10,"Score : "+score,{fontSize : "15px",fill : "#ed3465"});
    textMoney = game.add.text(10,30,"Money : "+money.toFixed(2),{fontSize : "15px",fill : "#ed3465"});
}

function update() {
    console.log(game.world.height-game.world.height*(5/10));
    text1.text = "Sampan : "+count1;
    text2.text = "Sailboat : "+count2;
    text3.text = "Barque : "+count3;
    text4.text = "Battleship : "+count4;
    textp1.text = "productivity : "+count1*5;
    textp2.text = "productivity : "+count2*50;
    textp3.text = "productivity : "+count3*150;
    textp4.text = "productivity : "+count4*300;
    textPrice1.text = "price : "+price1.toFixed(2);
    textPrice2.text = "price : "+price2.toFixed(2);
    textPrice3.text = "price : "+price3.toFixed(2);
    textPrice4.text = "price : "+price4.toFixed(2);
    textScore.text = "Score : "+score;
    textMoney.text = "Money : "+money.toFixed(2);
    if(time%60==0){
        var plusScore = (count1*5)+(count2*50)+(count3*150)+(count4*300);
        score+=plusScore;
        money+=plusScore;
    }
    time++;
}
function clicker() {
    score++;
    money++;
}
function buy1(){
    if(money>=price1){
        count1++;
        money-=price1;
        price1=price1*1.5;
    }
}
function buy2(){
    if(money>=price2){
        count2++;
        money-=price2;
        price2=price2*1.5;
    }
}
function buy3(){
    if(money>=price3){
        count3++;
        money-=price3;
        price3=price3*1.5;
    }
}
function buy4(){
    if(money>=price4){
        count4++;
        money-=price4;
        price4=price4*1.5;
    }
}
