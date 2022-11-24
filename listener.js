(function () {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
})()

let index = 0
let pat = 'circle'
let img = 'fine'
$(".addtext").click(function () {
    var text = $("#textval").val();
    var font = $("#inputGroupSelect02").val();
    var color = $("#textcol").val();
    var fontsize = $("#fontsize").val();
    if (text === '') {
        $(".needword").css("display", "block");
        return
    } else {
        $(".needword").css("display", "none");
    }
    index = index + 1
    $(".bgphoto").append(
        '<div class = "dragtext" id ="text' + index + '" style = "position: absolute">' + text + '</div>'
    );
    $("#text" + index).css("font-family", font);
    $("#text" + index).css("color", color);
    $("#text" + index).css("font-size", fontsize);
    $("#text" + index).draggable({ containment: $('#bgbottle') });
    $(".noele").css("display", "none");
    $(".list-group").append(
        '<li class="list-group-item" id = "list-' + index + '"><button class="btn btn-outline-secondary shadow-none el-delete" type="button" data-index ="' + index + '"><i class="fa-solid fa-trash-can"></i></button><button class="btn btn-outline-secondary shadow-none el-edit" type="button" data-index ="' + index + '"><i class="fa-solid fa-sliders"></i></button>　<span class="badge bg-secondary">Text</span>　#' + index + '　' + text + '</li>'
    );
    $("#textval").val("")
})

$(".ch-circle").click(function () {
    pat = 'circle'
    $(".pat").css("opacity", "0.5");
    $(this).css("opacity", "1");
})

$(".ch-triangle").click(function () {
    pat = 'triangle'
    $(".pat").css("opacity", "0.5");
    $(this).css("opacity", "1");
})

$(".ch-square").click(function () {
    pat = 'square'
    $(".pat").css("opacity", "0.5");
    $(this).css("opacity", "1");
})

$(".feat").click(function () {
    feat = $(this).data('img')
    $(".featbox").css("opacity", "0.5");
    $(this).css("opacity", "1");
})

$(".addpat").click(function () {
    var size = Number($("#patsize").val());
    var color = $("#patcol").val()
    index = index + 1
    $(".bgphoto").append(
        '<div class = "pat-' + pat + '" style = "position: absolute" id ="pat' + index + '"></div>'
    );
    $("#pat" + index).draggable({ containment: $('#bgbottle') });
    if (pat === "circle") {
        $("#pat" + index).css("width", size + "px");
        $("#pat" + index).css("height", size + "px");
        $("#pat" + index).css("background-color", color);
    } else if (pat === "triangle") {
        $("#pat" + index).css("border-left", size / 2 + "px solid transparent");
        $("#pat" + index).css("border-right", size / 2 + "px solid transparent");
        $("#pat" + index).css("border-bottom", size + "px solid " + color);
    } else if (pat === "square") {
        $("#pat" + index).css("width", size / 2 + "px");
        $("#pat" + index).css("height", size / 2 + "px");
        $("#pat" + index).css("background-color", color);
    }
    $(".noele").css("display", "none");
    $(".list-group").append(
        '<li class="list-group-item" id = "list-' + index + '"><button class="btn btn-outline-secondary shadow-none el-delete" type="button" data-index ="' + index + '"><i class="fa-solid fa-trash-can"></i></button><button class="btn btn-outline-secondary shadow-none el-editpat" type="button" data-index ="' + index + '" data-pattern ="' + pat + '"><i class="fa-solid fa-sliders"></i></button>　<span class="badge bg-secondary">Pattern</span>　#' + index + '　' + pat + '</li>'
    );
})

$(".addimg").click(function () {
    index = index + 1
    $(".bgphoto").append(
        '<div style = "width: 100px" id ="img' + index + '"><img style = "position: absolute" class="feat" src="img/' + feat + '.png"></div>'
    );
    $("#img" + index).draggable({ containment: $('#bgbottle') });
    $(".noele").css("display", "none");
    $(".list-group").append(
        '<li class="list-group-item" id = "list-' + index + '"><button class="btn btn-outline-secondary shadow-none el-delete" type="button" data-index ="' + index + '"><i class="fa-solid fa-trash-can"></i></button><button class="btn btn-outline-secondary shadow-none" disabled type="button"><i class="fa-solid fa-sliders"></i></button>　<span class="badge bg-secondary">Image</span>　#' + index + '　' + feat + '</li>'
    );
})


$(document).on('click', ".el-delete", function () {
    let el = $(this).data('index')
    $("#text" + el).css('opacity', '0');
    $("#pat" + el).css('opacity', '0');
    $("#img" + el).css('opacity', '0');
    $("#list-" + el).remove()
});

$(document).on('click', ".el-edit", function () {
    let el = $(this).data('index')
    $('.yourel').css("display", "none");
    $('.editing').css("display", "block");
    $('.edtext').click(function () {
        var font = $("#edinputGroupSelect02").val();
        var color = $("#edtextcol").val();
        var fontsize = $("#edfontsize").val();
        $("#text" + el).css("font-family", font);
        $("#text" + el).css("color", color);
        $("#text" + el).css("font-size", fontsize);
    })
});

$(document).on('click', ".el-editpat", function () {
    let el = $(this).data('index')
    let patterning = $(this).data('pattern')
    $('.yourel').css("display", "none");
    $('.editingpat').css("display", "block");
    $('.edpat').click(function () {
        var color = $("#edpatcol").val();
        var size = $("#edpatsize").val();
        if (patterning === "circle") {
            $("#pat" + el).css("width", size + "px");
            $("#pat" + el).css("height", size + "px");
            $("#pat" + el).css("background-color", color);
        } else if (patterning === "triangle") {
            $("#pat" + el).css("border-left", size / 2 + "px solid transparent");
            $("#pat" + el).css("border-right", size / 2 + "px solid transparent");
            $("#pat" + el).css("border-bottom", size + "px solid " + color);
        } else if (patterning === "square") {
            $("#pat" + el).css("width", size / 2 + "px");
            $("#pat" + el).css("height", size / 2 + "px");
            $("#pat" + el).css("background-color", color);
        }
    })
});

$(document).on('click', ".edback", function () {
    $('.yourel').css("display", "block");
    $('.editing').css("display", "none");
    $('.editingpat').css("display", "none");
});
