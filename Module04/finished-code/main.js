// Create a new HTML element and add it to the page
var newElement = document.createElement("p");
newElement.innerHTML = "This is a new paragraph element!";
document.body.appendChild(newElement);

// Add an event listener to the button
var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
	// Modify the page content when the button is clicked
	newElement.style.color = "red";
});