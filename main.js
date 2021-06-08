function preload() {}

function setup() {
    canvas = createCanvas(300, 250);
    video = createCapture(VIDEO);
    canvas.center() ;
    video.position(40,350);
    video.size(300, 250);
    video.hide() ;
}
function draw() {
    image(video, 0, 0, 300, 250) ;
}