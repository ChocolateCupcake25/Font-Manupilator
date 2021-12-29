function preload(){
}
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,440);
    canvas.position(700,100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#ff78ff');
}

function modelLoaded(){
    console.log('Posenet is Initialized!');
}
function gotPoses(results){
    if(results.length > 0){ 
        console.log(results);
    }
}