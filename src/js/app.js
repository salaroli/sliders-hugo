// JS Goes here - ES6 supported

// Say hello
console.log("🦊 Hello! Edit me in src/js/app.js");

$(".dehaze").click(function() {
    $(".menu").addClass("menu--active");
});

$(".menu__img").click(function() {
    $(".menu").removeClass("menu--active");
});
$(".menu li").click(function() {
    $(".menu").removeClass("menu--active");
});
