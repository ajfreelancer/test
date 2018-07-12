color1 = document.querySelector('.color1');
color2 = document.querySelector('.color2');
body = document.getElementById('gradient');
slider1 = document.querySelector('.slider1');
slider2 = document.querySelector('.slider2');
gradientvalue = document.querySelector('.gradientvalue');
function setGradient(){
	body.style.background = "linear-gradient(to right, "+color1.value+" "+slider1.value+"%"+", "+color2.value+" "+slider2.value+"%"+")";
	gradientvalue.textContent = body.style.background;
}
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
slider1.addEventListener("input",setGradient);
slider2.addEventListener("input",setGradient);
