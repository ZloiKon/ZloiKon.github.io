$(document).ready(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();



    $(".modal-body").load("https://artert241.github.io a.card-text.text-center", function (response, status, request) {
        
        
    });
});


$("btnSelect").click(function (e) {
    console.log($("option[selected='true']"));
});

Ок







