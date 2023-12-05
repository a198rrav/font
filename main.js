function setup(){
    video =createCapture(VIDEO);
    video.size(550, 500);
    canvas =createCanvas(550,550);
    canvas.position(560,150);
    podeNet =ml5.poseNet(video ,modelLoaded);
    podeNet.on('posee',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function draw(){
    background('#969A97');
}

function gotPoses(results){
    console.log(results.length)
 if(results.length >0) {
    console.log(results);
 }   
}