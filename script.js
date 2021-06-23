let ballGraphical = document.getElementById('ball');
let fieldGraphical = document.getElementById('field');
const buttonGo = document.getElementById('launch');

let field={
topBorder:0,
leftBorder:0,
rightBorder:fieldGraphical.clientWidth,
bottomBorder:fieldGraphical.clientHeight
}

let ball = {
 speed : 50,
 radius: ballGraphical.clientHeight/2,
 direction: { x:1,y:1},
}

buttonGo.onclick=function(){

var movementHorizontal= ball.speed*ball.direction.x;
var movementVertical= ball.speed*ball.direction.y;
var newLeft=ballGraphical.offsetLeft+movementHorizontal;
var newTop=ballGraphical.offsetTop+movementVertical;

ballGraphical.style.left= newLeft+'px';
ballGraphical.style.top=newTop+'px';


}