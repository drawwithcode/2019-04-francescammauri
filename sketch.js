var mySong;
var myImage;
var santone;
var eye;
var awing;
var bwing;
var hand;
var star;
var bird;

function preload(){
mySong = loadSound("./assets/170.wav");
myImage = loadImage("./assets/last trip.jpg");
santone = loadImage("./assets/santone.png");
eye = loadImage("./assets/occhio.png");
awing = loadImage("./assets/vertical wing.png");
bwing = loadImage("./assets/orizontal wing.png");
hand = loadImage("./assets/mano.png");
star = loadImage("./assets/star.png");
bird = loadImage("./assets/bird.png");
}

function setup() {
createCanvas(windowWidth, windowHeight);
mySong.play();
analyzer = new p5.Amplitude();
analyzer.setInput(mySong);

}

function draw() {
// set background image
background(myImage);
// volume setup
var volume = 0;
volume = analyzer.getLevel();
volume = map( volume, 0,0.5,1000,2000);
//  first image, old man
push()
imageMode(CENTER);
image(santone, width/2 - 10 , height/2 + 20, 0, volume/8 + santone.height/1.5);
pop();
// second image, eye on the left
push()
imageMode(CENTER);
image(eye, width/2 +305, height/2 -50 , volume/3 + eye.width, 0);
pop();
push()
// wings
image(awing, width/2 - 747, height/2 - 505 ,0, volume/3 + awing.height/1.5 )
image(bwing, width/2 - 880, height/2 -430,volume/3 + awing.width/1.5, 0)
// hand
image( hand, width/2 -950, height/2-520 ,volume/3 + hand.width/1.5, 0)
// lady right top, bird and star
imageMode(CENTER)
image( bird, width/2 + 15 , height/2 + 100 ,0, volume/3 + bird.height/1.5)
image( star, width/2 , height/2 + 100 ,0, volume/3 + star.height/1.5)
// sparkling star
noStroke()
fill("white");
ellipse(width/2 - 230, height/2 - 60 , volume/150)
ellipse(width/2 - 455, height/2 - 23 , volume/170)
// eye sparkle
ellipse(width/2 + 205 , height/2 + 238 , volume/300)
// eye in the center
ellipse(width/2 -23 , height/2 + 90 , volume/70)
fill("#7d6948");
ellipse(width/2 -29 , height/2 + 87 , volume/120)
fill("black")
ellipse(width/2 -30 , height/2 + 86 , volume/200)
fill("white")
ellipse(width/2 -26 , height/2 + 85 , volume/320)
pop();
}
