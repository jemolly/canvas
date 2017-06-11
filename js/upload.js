var image;

function upload() {
	var file = document.getElementById("file");
	var can = document.getElementById("can");
	image = new SimpleImage(file);
	image.drawTo(can);
}

function makeGray() {
	var can2 = document.getElementById("can2");
	var ctx = can2.getContext("2d");
    ctx.clearRect(0,0,can2.width, can2.height)

    for( var pixel of image.values()) {
    	var avr = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
	    pixel.setRed(avr);
    	pixel.setGreen(avr);
    	pixel.setBlue(avr);
    }	
	
    image.drawTo(can2);

}