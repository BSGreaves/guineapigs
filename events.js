document.getElementById("page-title").addEventListener("mouseenter", function() {
	document.getElementById("output-target").innerHTML = "You moved your mouse over the header";
});
document.getElementById("page-title").addEventListener("mouseleave", function() {
	document.getElementById("output-target").innerHTML = "You left me!!";
});
document.getElementById("keypress-input").addEventListener("keyup", function() { //keyup seemed to work better than keydown
	document.getElementById("output-target").innerHTML = document.getElementById("keypress-input").value;
});
document.getElementById("add-color").addEventListener("click", function() {
	document.getElementById("guinea-pig").classList.add("addedColor")
});
document.getElementById("make-large").addEventListener("click", function() {
	document.getElementById("guinea-pig").classList.add("hulkify")
});
document.getElementById("add-border").addEventListener("click", function() {
	document.getElementById("guinea-pig").classList.add("addBorder")
});
document.getElementById("add-rounding").addEventListener("click", function(e) {
	document.getElementById("guinea-pig").classList.add("addRounding")
});

var articles = document.getElementsByClassName("article-section");

for (i = 0; i < articles.length; i++) {
	articles[i].addEventListener("click", function (e) {
		document.getElementById("output-target").innerHTML = `You clicked on the ${e.target.innerText} section`;
	})
}
