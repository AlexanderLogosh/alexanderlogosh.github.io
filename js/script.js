var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");
var overlay = document.querySelector(".modal-overlay")

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	overlay.classList.add("modal-overlay-show");
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	overlay.classList.remove("modal-overlay-show");
	popup.classList.remove("modal-error");
}); 


window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		overlay.classList.remove("modal-overlay-show");
		popup.classList.remove("modal-content-show");
		if (mapPopup.classList.contains("modal-content-show")) {
			mapPopup.classList.remove("modal-content-show");
		}
	}
});

form.addEventListener("submit", function(event) {
	if (!login.value || !password.value) {
		event.preventDefault();
		popup.classList.add("modal-error"); 
	} else {
		localStorage.setItem("login", login.value);
	}
}); 