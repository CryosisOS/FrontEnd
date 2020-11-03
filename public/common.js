﻿$(document).ready(function() {
    var element = $(".whiteNoise");
    
    $('input[name=type][value=whiteNoise]').prop('checked', true);
        
    var element1 = $(".whiteNoise");
    var element2 = $(".impulse");
    var element3 = $(".sinusoidal");
    
    $("input[name=optradio][value=whiteNoise]").click(function() {
        element1.removeClass("d-none");
        element2.addClass("d-none");
        element3.addClass("d-none");
    });
    
    $("input[name=optradio][value=impulse]").click(function() {
        element2.removeClass("d-none");
        element3.addClass("d-none");
        element1.addClass("d-none");
    });
    
    $("input[name=optradio][value=sinusoidal]").click(function() {
        element3.removeClass("d-none");
        element1.addClass("d-none");
        element2.addClass("d-none");
    });

    $("#getDelayNofy").click(function () {
        var x = document.getElementById("delayNofy");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    });

    $("#getSubNofy").click(function () {
        var x = document.getElementById("subNofy");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    });

    $("#merge").click(function () {
        var element1 = $("#unmerge-img1");
        var element2 = $("#unmerge-img2");
        var element3 = $("#merge-img");
        element1.addClass("d-none");
        element2.addClass("d-none");
        element3.removeClass("d-none");
    });

    $("#unmerge").click(function () {
        var element1 = $("#unmerge-img1");
        var element2 = $("#unmerge-img2");
        var element3 = $("#merge-img");
        element3.addClass("d-none");
        element2.removeClass("d-none");
        element1.removeClass("d-none");
    });
});