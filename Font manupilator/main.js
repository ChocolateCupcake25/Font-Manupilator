
rightWristX = 0;
leftWristX = 0;
difference = 0;

function preload() {
}
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 440);
    canvas.position(700, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded() {
    console.log('Posenet is Initialized!');
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.y;
        difference = floor(leftWristX-rightWristX);
        console.log('rightWristX' + rightWristX + 'leftWristX' + leftWristX + 'difference' + difference);
    }
}
function draw() {
    background('#ff78ff');
    document.getElementById('font').innerHTML = 'Font Size = ' + difference + 'px';
    textSize(difference);
    fill('#0f0f0f');
    text('Ziyah', 50, 200);
}
