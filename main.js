noseX=0
noseY=0
function preload(){
clown_nose=loadImage('https://i.postimg.cc/JzKz67Zn/m.png')
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300)
    video.hide()

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses);
}

function draw(){
image (video,0,0,300,300)
image(clown_nose,noseX-15,noseY,30,30)

}
function takeSnapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log("Model is Initialized")
}

function gotPoses(result){
    if (result.length>0){
        console.log(result)
        noseX=result[0].pose.nose.x
        noseY=result[0].pose.nose.y
        console.log("nose x="+noseX)
        console.log("nose y="+noseY)
        
    }
}