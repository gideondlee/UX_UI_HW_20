console.log("Your index.js file is loaded correctly!");

$("#logo").on("click", function(){ 
    console.log("You clicked on .navbar!");
    $("#logo").fadeToggle("slow");
});
$(".nav-item").hover(function() {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
});