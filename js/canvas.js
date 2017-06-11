function doRed() {
	var dd1 = document.getElementById("d1");
	var ctx = dd1.getContext("2d");
	dd1.style.backgroundColor = "red";
	ctx.fillStyle = "black";
	ctx.font = "30px Arial";
	ctx.fillText("This is red!", 50, 50);
}

function doBlue() {
	var dd2 = document.getElementById("d2");
	dd2.style.backgroundColor = "blue";
	var ctx = dd2.getContext("2d");
	ctx.fillStyle = "black";
	ctx.font = "30px Arial";
	ctx.fillText("This is blue!", 50, 50);
}

function clear_canvas() {
	var dd1 = document.getElementById("d1");
	var ctx = dd1.getContext("2d");
	ctx.clearRect(0,0,400,400);
	dd1.style.backgroundColor = "white";
	var dd2 = document.getElementById("d2");
	var ctx2 = dd2.getContext("2d");
	ctx2.clearRect(0,0,400,400);
	dd2.style.backgroundColor = "white";
}
