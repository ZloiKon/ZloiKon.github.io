$(document).ready(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
});
$("#btnSelect").click(function (e) {
    let select = document.querySelector("select")
    let url = select.options[select.selectedIndex].value + " " + "div#answer";
    document.querySelector("#msgLabel").innerHTML = " Сообщение от фраера  " + select.options[select.selectedIndex].innerHTML;

    $(".modal-body").load(url, function (response, status, requwst) {
        document.querySelector(".modal-body>div").id = "";
        $("#msgBox").modal("show");
    });
});  
