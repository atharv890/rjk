x_value="";
y_value="";
function preload(){
camera=loadImage("https://i.postimg.cc/8s8Tmr1B/glasses-PNG54324.png");
}
function setup(){
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.size(500,500);
video.hide();
ml=ml5.poseNet(video,modelloaded);
ml.on("pose",hi);
}
function modelloaded(){
console.log("posenet is loaded");
}
function hi(results){
    if(results.length>0){
    console.log(results);
    x_value=results[0].pose.nose.x-80;
    y_value=results[0].pose.nose.y-70;
    console.log(results[0].pose.leftEye.x);
    console.log(results[0].pose.leftEye.y);
    }}
function draw(){
    fill(0,0,250);
    stroke(60,20,30);
    circle(20,50,40);
    circle(20,450,40);
    circle(450,450,40);
    circle(450,50,40);
    fill(250,0,0);
    stroke(52,30,30);
    rect(39,48,390,10);
    rect(39,450,390,10);
    rect(15,69,10,360);
    rect(448,69,10,360);
    image(video,30,60,410,380);
    image(camera,x_value,y_value,120,50);
}