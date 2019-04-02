window.onload = f;

function f()
{
	let btn= document.getElementById("butonul");
	btn.onclick = micsorare;
	
	let b = document.getElementById("but");
	b.onclick = function (){
	let prop = window.getComputedStyle(b, null).getPropertyValue("background-color");
	alert(prop);
  document.getElementById("demo").innerHTML = prop;
	}
	
}

function micsorare()
{
	let img = document.getElementById("video");
	img.style.width= '50%';
	img.style.height='50%';
}

