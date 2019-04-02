window.onload = f

var i=0;



function f(){
	let drop = document.getElementsByClassName("contact");
	let pozza = document.getElementById("contact")
	pozza.onclick = funct

	for( let j = 0; j < drop.length; j++ )
	{
		drop[j].onclick = funct
	}
	
}

function funct()
{
	let surse = ["d1.jpg" , "d2.jpg"];
	let img = document.createElement("img");
	
	img.style.width = "300px";
	let canv = document.getElementById("canvas");
	
	if(canv.childNodes[0])
		canv.removeChild(canv.firstChild);
	
	if(i%2==0)
		img.src = surse[0];
	else 
		img.src = surse[1];
	canv.appendChild(img)
	i++;
}