// changeRoute import from model.js
import { changeRoute } from "../model/model.js";

// initListener funtion
function initListener(){
    // listens for hash changes to change content
    $(window).on("hashchange", changeRoute);
    changeRoute();

    // toggles .active class on bars and links when clicked
    $(".bars").click(function(e){
        $('.bars').toggleClass("active");
        $('.links').toggleClass("active");
    });

    // toggles .active class on bars and links when clicked
    if ($(window).width() <= 960) {
        $(".links a").click(function(e){
            $('.bars').toggleClass("active");
            $('.links').toggleClass("active");
        });
    };

    $("#create-submit").click(function (e) {
        e.preventDefault();
        console.log("hi");
    });
}

// calling funtions
$(document).ready(function(){
    initListener();
});