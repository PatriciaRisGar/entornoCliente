document.getElementById("span").addEventListener("click", alertSpan1);
document.getElementById("span").addEventListener("mouseover", alertSpan2);
document.getElementById("div").onclick = () => alert("clic en DIV");
document.getElementById("div").onmouseover = function () {
	alert("Raton en DIV");
};

function alertSpan1(event) {
	alert("clic en SPAN");
	event.stopPropagation();
}
function alertSpan2() {
	alert("Raton en SPAN");
}
