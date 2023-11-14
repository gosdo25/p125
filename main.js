function setup(){
    canvas=createCanvas(300,300)
    canvas.position(700,200)

    video=createCapture(VIDEO)
    video.position(200,200)
    video.size(300,300)
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);
}
function modelloaded(){
    console.log("model is loaded")
}
function gotposes(results){
    if(results.length>0){
      console.log(results)  
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
    }

}
function draw(){
    background("coral");
    fill("#F90093");
    textSize(difference);
    text("Lauren",10,150);
}

leftWristX=0;
rightWristX=0;
difference=0;

