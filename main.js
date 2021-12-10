noseX=0;
noseY=0;
noseX1=0;
noseY1=0;
function preload() {
  clown_nose1 = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
  clown_nose = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX1 = results[0].pose.nose.x-40;
    noseY1 = results[0].pose.nose.y;
      noseX=results[0].pose.nose.x-30;
      noseY=results[0].pose.nose.y+15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_nose1, noseX1, noseY1, 80, 35);
  image(clown_nose, noseX, noseY, 50, 20);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
