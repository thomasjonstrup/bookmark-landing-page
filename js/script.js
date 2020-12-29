var burger = document.getElementsByClassName("nav__burger");
var menu = document.getElementsByClassName("nav__menu");
console.log("burger :>> ", burger);

burger[0].addEventListener("click", () => {
	if (menu[0]) {
		menu[0].classList.toggle("nav__menu--open");
	}
});
