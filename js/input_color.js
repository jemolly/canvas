function changeColor() {
	var dd1 = document.getElementById("d1");
	var col = document.getElementById("change2")
	dd1.style.backgroundColor = col.value;
}

function drawSquare() {
	var dd1 = document.getElementById("d1");
	var ran = document.getElementById("range");
	var ctx = dd1.getContext("2d");
	var len = ran.value;
	ctx.clearRect(0,0,dd1.width, dd1.height)
	ctx.fillStyle = "yellow";
	ctx.fillRect(10, 10, len, len);
	ctx.fillRect(parseInt(len)*2+30, 10, len, len);
	ctx.fillRect(parseInt(len)+20,10,len,len);
}
