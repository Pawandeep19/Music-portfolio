var but1=document.querySelector("#but1");
var email1=document.querySelector("#email1");
// button harpreet pressed action
but1.addEventListener("click",function(){
		email1.textContent="I ALREADY LIKE YOU TOO!! YOU ARE AMAZING :)";
	    email1.style.color="black";
    });	


//navbar scrolling action
$(function () {
        $(document).scroll(function () {
            var $nav = $("#mainNavbar");
            var $links=$(".navbar-dark .navbar-nav .nav-link");
            var $brand=$(".navbar-dark .navbar-brand");
            $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
            $links.css("color","white",$(this).scrollTop() > $nav.height());
            $brand.css("color","white",$(this).scrollTop() > $nav.height());
        });
    });