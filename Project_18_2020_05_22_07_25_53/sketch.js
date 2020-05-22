                                                                                                                             var ball,img,paddle;

function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}

function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=10;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  paddleSpeed = 10;
}

function draw() {
  background(205,153,0);
      
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
 
  ball.bounceOff(paddle,explosion());
  
    //paddle.collide(edges);
  
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y - paddleSpeed;  
  }
  
  if(keyDown(DOWN_ARROW))
  {
     paddle.y = paddle.y + paddleSpeed;
  }
  drawSprites();
  
}

function explosion()
 {
  if (ball.collide(paddle))
    {
      ball.velocityY= random(-8,8);
      ball.velocityX = -8
    }
 }

