var css = document.querySelector("h3");
var c1 = document.querySelector(".c1");
var c2 = document.querySelector(".c2");
var body = document.querySelector("body");
var button= document.getElementById("random");
var color = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


	body.style.background = 
	"linear-gradient(to right, " 
	+ c1.value 
	+ "," 
	+ c2.value 
	+")";
css.textContent = body.style.background + ";";

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ c1.value 
	+ "," 
	+ c2.value 
	+")";

	css.textContent = body.style.background + ";";
}

c1.addEventListener("input", setGradient);


c2.addEventListener("input", setGradient);
	

button.addEventListener("click", function(){
	c1="#";
	c2="#";
	for(var x=0;x<6;x++){
		c1+=color[Math.floor(Math.random()*color.length)];
		c2+=color[Math.floor(Math.random()*color.length)];
	}
	// c1.value=c1;
	// c2.value=c2;
	console.log(c1);
    console.log(c2);
    body.style.background = 
	"linear-gradient(to right, " 
	+ c1 
	+ "," 
	+ c2
	+")";
	css.textContent = body.style.background + ";";

	
})
















// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);