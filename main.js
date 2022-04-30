
var canvas = new fabric.canvas('myCanvas');

ball_x=0;
ball_y=0;
hole_x=400;
hole_y=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.image.fromURL("golf_h1.png",function(img){
		hole_obj=img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToheight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj)
	});
	new_image();
}

function new_image()
{
	fabric.image.fromURL("ball.png",function(img){
		ball_obj=img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToheight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj)
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
document.getElementById("hd3").innerHTML="you have hit the goal!!!";
document.getElementById("mycanvas").style.boredercolor="red";
	

	if ((ball_x==hole_x)&&(ball_y==hole_y)) {
		canvas.romove(ball_obj);
	}	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_y>=0) {
			ball_y=ball_y-block_image_height;
			console.log("blockimage height="+block_image_height);
			console.log("when Up arrow key is pressed,x="+ ball_x +",y="+ball_y);
			canvas.remove(ball_obj);
			ball_update();

	}

	function down()
	{
		if (ball_y<=450) {
			ball_y=ball_y-block_image_height;
			console.log("blockimage height="+block_image_height);
			console.log("when down arrow key is pressed,x="+ ball_x +",y="+ball_y);
			canvas.remove(ball_obj);
			ball_update();	 
	}

	function left()
	{
		if(ball_x >5)
		{
				ball_x=ball_x-block_image_height;
				console.log("blockimage height="+block_image_height);
				console.log("when left arrow key is pressed,x="+ ball_x +",y="+ball_y);
				canvas.remove(ball_obj);
				ball_update();
		
	}

	function right()
	{
		if(ball_x <=1050)
		{
				ball_x=ball_x-block_image_height;
				console.log("blockimage height="+block_image_height);
				console.log("when right arrow key is pressed,x="+ ball_x +",y="+ball_y);
				canvas.remove(ball_obj);
				ball_update();
		}
	}
	
	}}}}

