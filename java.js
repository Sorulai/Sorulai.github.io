var link = document.querySelector(".btn-slider");
var popup = document.querySelector(".modal");
var close = document.querySelector(".btn-close-modal");
var login = document.querySelector("[name=login]");
var map = document.querySelector(".btn-b")
var over = document.querySelector(".overlay")


link.addEventListener("click", function(evt){
	evt.preventDefault();
console.log("Клик по ссылке вход");
popup.classList.add("modal-show");
over.classList.add("overlay-show");
login.focus();
});

map.addEventListener("click", function(evt){
	evt.preventDefault();
console.log("Клик по ссылке вход");
popup.classList.add("modal-show");
over.classList.add("overlay-show");
login.focus();
});

close.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.remove("modal-show");
	over.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(evt){
if (evt.keyCode === 27){
	evt.preventDefault();

if (popup.classList.contains("modal-show")){
	popup.classList.remove("modal-show");
}
}
});