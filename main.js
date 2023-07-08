nose_x = 0;
nose_y = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	coin_wav = loadSound("coin.wav");
	game_over_wav = loadSound("gameover.wav");
	jump_wav = loadSound("jump.wav");
	kick_wav = loadSound("kick.wav");
	die_wav = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("gameDiv");

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("console_img");

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", gotPoses);

}

function modelLoaded() {

	console.log("Modal Loaded");

}

function gotPoses(results) {

	if(results.length > 0) {

		console.log(results);
		nose_x = results[0].pose.nose.x;
		nose_y = results[0].pose.nose.y;

	}

}

function draw() {
	game()
}






