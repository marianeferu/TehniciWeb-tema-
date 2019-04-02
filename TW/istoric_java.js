window.onload = f;

function f()
{
	let btn= document.getElementById("butonul");
	btn.onclick = culoare;
}


var nr=0;

function culoare()
{
	let c= document.getElementsByClassName("lista");
	
	for(let i=0; i< c.length; i++)
		if(i%2==0)
			if(nr%2==0)
				c[i].style.backgroundColor="#ffe6cc";
			else
					c[i].style.backgroundColor="beige";
		else 
			if(nr%2==0)
				c[i].style.backgroundColor="#b3cccc";
			else
				c[i].style.backgroundColor="#66ccff";
nr++;
}