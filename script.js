let ballGraphical = document.getElementById('ball');
let fieldGraphical = document.getElementById('field');
const buttonGo = document.getElementById('launch');
let directionGraphical = document.getElementById('direction');
let buttonPushed=false;

let field={
topBorder:0,
leftBorder:0,
rightBorder:fieldGraphical.clientWidth,
bottomBorder:fieldGraphical.clientHeight
}

let ball = {
 speed : 400,
 radius: ballGraphical.clientHeight/2,
 direction: { x:1,y:1},
}

buttonGo.onclick=function(){
    if(buttonPushed==false){
        updateDirectionIndicator();
        setInterval(moveBall,10);
        buttonPushed=true;
    }

    else{
        console.log('Already pushed');
    }

}

function moveBall(){
    var movementHorizontal= ball.direction.x*ball.speed*0.01;
    //console.log(movementHorizontal);
    var movementVertical= ball.direction.y*ball.speed*0.01 ;
    var newLeft=ballGraphical.offsetLeft+movementHorizontal;

    var newTop=ballGraphical.offsetTop+movementVertical;
    //console.log(ball.direction);
    if(newLeft<=0||newLeft>=field.rightBorder-ball.radius*2||newTop<=0||newTop>=field.bottomBorder-ball.radius*2){
        ballGraphical.style.left= newLeft+'px';
        ballGraphical.style.top=newTop+'px';
        //ball.direction.x=Math.random()*2-1;
        //ball.direction.y=Math.sqrt(1-ball.direction.x*ball.direction.x);
        if (newLeft<=0||newLeft>=field.rightBorder-ball.radius*2){
            ball.direction.x=-1*ball.direction.x;
        }

        else{
            ball.direction.y=-1*ball.direction.y; 
        }
        updateDirectionIndicator();
        //ball.speed=ball.speed*-1;
    }
    
    else{
        ballGraphical.style.left= newLeft+'px';
        ballGraphical.style.top=newTop+'px';

    }
    
}

function updateDirectionIndicator(){
    let angleRad=Math.atan(ball.direction.y/ball.direction.x);
    let angleDeg=angleRad*180/Math.PI;
    let transformation="";
    console.log(ball.direction);
    console.log(angleDeg);
    if(ball.direction.x>0 && ball.direction.y>0){
        transformation=`rotate(${angleDeg}deg)`;
    }
    else if(ball.direction.x==-1 && ball.direction.y==0){
        angleDeg=180;
        transformation=`rotate(${angleDeg}deg)`;
    }

    else if(ball.direction.x<0 && ball.direction.y>0){
        angleDeg+=180;
        transformation=`rotate(${angleDeg}deg)`;
    }

    else if(ball.direction.x<0 && ball.direction.y<0){
        angleDeg+=180;
        transformation=`rotate(${angleDeg}deg)`;
    }

    else {
        angleDeg+=360;
        transformation=`rotate(${angleDeg}deg)`;
    }

    directionGraphical.style.transform=transformation;
    console.log(angleDeg);
};
