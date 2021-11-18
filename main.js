function preload(){

}
function setup(){
    canvas=createCanvas(680,480);
    canvas.position(100,200);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,225,155,200,150);
    fill(0,255,0);
    stroke(0,255,0);
    rect(65,55,575,20);
    rect(65,415,575,20);
    rect(55,50,20,375);
    rect(615,50,20,375);
    fill(255,0,0);
    stroke(255,0,0);
    circle(60,60,80);
    circle(620,60,80);
    circle(60,420,80);
    circle(620,420,80);
}
function take_snapshot(){
    save("sy.png");
}