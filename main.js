img = "";
rightwristX = 0;
rightWristY = 0;


function preload()
{
  img = loadImage("https://s3-whjr-curriculum-uploads.whjr.online/b0b2ac92-8068-42fe-9749-3b5e6d3784cf.png");
}

function setup() {
  createCanvas(650, 400);
  video = createCapture(VIDEO);
  video.size(600,300);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw() {
  background("#D3D3D3");
  r = random(255);
  g = random(255);
  b = random(255);
  fill(r,g,b);
  circle(250, 150, 100);
  stroke(r,g,b);
  if(noseY < 150)
  {
    paddleY = paddleY - 1;
  }
  if(noseY > 150)
  {
    paddleY = paddleY + 1;
  }
  image(img,paddleX, paddleY, 40,70);
}

function modelLoaded() {
    console.log('Model Loaded!');
  }

  function gotPoses(results)
{
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +", noseY = " + noseY);
  }
}
  


