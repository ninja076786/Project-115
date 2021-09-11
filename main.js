leftShoulder_x=0;
leftShoulder_y=0;
function preload(){

    
}
 

function setup(){
    canvas=createCanvas(300,300)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftShoulder_x=results[0].pose.leftShoulder.x
        leftShoulder_y=results[0].pose.leftShoulder.y
    }

}

function modelLoaded(){
    console.log("poseNet is initianlized!");
}
 
function draw(){
image(video,0,0,300,300);
}
