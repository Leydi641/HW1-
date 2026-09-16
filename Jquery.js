$(document).ready(function() {

    $("#changePage").click(function() {

        $("h1").animate({
            fontSize: "50px"
        }, 1000);

        $("h1").animate({
            fontSize: "32px"
        }, 1000);

        $("h1").css("color", "purple");

        setTimeout(function() {
            $("h1").css("color", "#643e3e");
        }, 2000);

        $(".about img").css("border", "5px solid #9e5168");

    });

});