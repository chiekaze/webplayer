//BACKGROUND BUILDINGS

var imgArray = new Array(4);

function loadImages()
{
	for(var i = 0; i < imgArray.length; i++)
	{
		imgArray[i] = new Image();
		imgArray[i].src = '../img/gamefiles/bgSkyline2.png';
		imgArray[i].style.position = "fixed";
		imgArray[i].style.bottom = "0px";
		int imgPos = 0;
		if(i == 0)
		{
			imgArray[i].style.left = "0px";
		}
		else
		{
			imgArray[i].style.left = (imgPos + imgArray[i].width) + "px";
			imgPos += imgArray[i].width;
		}
	}
}
function drive(){
	
}

setInterval(loadImages, 10);