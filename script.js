$(document).ready(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();



    $(".modal-body").load("https://artert241.github.io a.card-text.text-center", function (response, status, request) {

    });
});


$("btnSelect").click(function (e) {
    console.log($("option[selected='true']"));
});

$("#btnSelect").click(function (e) {
    let select = document.querySelector("select.custom-select")
    let url = select.options[select.selectedIndex].value + " " + "div#answer";

    $(".modal-body").load(url, function(response, status, requwst){

    });
    document.querySelector("modal-body>div").id="";
});







