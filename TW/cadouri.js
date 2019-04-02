window.onload = main;

	var count = parseInt(localStorage.getItem("count"));

function myFunction() {
  var myWindow = window.open("http://www.imparte.ro/Ajutor/Asistenta-sociala/Cele-mai-frumoase-donatii-de-Craciun-540.html", "_blank", "width=500,height=600");
	count += 1;
	localStorage.setItem("count",count);
  }
function mail() {
  var x = document.createElement("myText");
  var t = document.createTextNode("Verificat");
  x.appendChild(t);
  document.body.appendChild(x);
  
}
function imagine() {
  document.getElementById("img1").style.zIndex = "1";
}

function functie() {
  document.getElementById("DIV").classList.add("mystyle");
 
  }

function closeWin() {
  myWindow.close();
}
function makesnowflake()
{ 
	
	

	let fulg = document.createElement('f');
	fulg.innerHTML = "*";
	
	fulg.style.fontSize = Math.floor(Math.random()*250) + "px";
	fulg.y = 0;
	fulg.fsize = parseInt(fulg.style.fontSize);
	
	fulg.style.top = 0 + "px";
	fulg.style.left = Math.floor(Math.random()*1920) + "px";
	
	fulg.sd = parseInt(fulg.style.left)
	fulg.leftTarget = fulg.sd + Math.floor(Math.random()*15);
	
	document.body.appendChild(fulg);
	
	var y = setInterval(coboara,50);
	
	function coboara()
	{ //stanga-dreapta
		if (fulg.leftTarget > fulg.sd)
		{ fulg.sd +=1;
			fulg.style.left = fulg.sd +"px";
			if(fulg.sd == fulg.leftTarget) //a ajuns la target
			fulg.leftTarget = fulg.sd - Math.floor(Math.random()*25);
		}
		else 
		{fulg.sd -= 1;
		fulg.style.left = fulg.sd + "px";
		if(fulg.sd == fulg.leftTarget) //a ajuns la target
			fulg.leftTarget = fulg.sd +Math.floor(Math.random()*25);
		}
		
		//coboara
		if(fulg.style.top!= 1050 + "px")
		{
			fulg.fsize -=1;
			fulg.style.fontsize = fulg.fsize +"px";
			fulg.y += Math.floor(Math.random() * 10);
			fulg.style.top = fulg.y + "px";
		}
		
		///opreste
		if(fulg.y >=1050 || fulg.size <=3)
		{ document.body.removeChild(fulg);
		clearInterval(y);
		}
	}
	fulg.onclick = function () { event.stopPropagation();
								document.body.removeChild(this);
								clearInterval(y);
								}
		return fulg;
}

	function main()
	{ var culori = ['lightblue', 'red', 'black', 'lightgreen', 'yellow'];
		var prevcol = "";
		document.body.onclick = function(){
											index = Math.floor(Math.random()*5);
											while(prevcol== culori[index])
												index = Math.floor(Math.random()*5)
												document.body.style.backgroundColor = culori[index];
												prevcol = culori[index];
										  }
		//creez fulg
		var x = setInterval(makesnowflake,50);
			
		
			document.getElementById("myBtn").addEventListener("click", function(){alert(document.innerHTML = Date())},true);
		var data = document.getElementById("counter")
	
			data.innerHTML = localStorage.getItem("count")
		
	}
	

