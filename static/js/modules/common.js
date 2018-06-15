/**
 * main
 * Copyright (c) 2018
 */

function mainRightHeight() {
    var mainHeight = $(window).height() - $('header').height() - 55;
    $('#mainFrame').height(mainHeight);
}

// webui-popover
function initPopover() {
    $("[data-toggle='web-popover']").webuiPopover({animation: 'pop',autoHide:3000});
    $('[data-toggle="tooltip"]').tooltip();
}

$(window).resize(function () {
    mainRightHeight();
});

$(window).load(function() {
    initPopover();
    mainRightHeight();
});

$(document).ready(function () {
    $('body').layout({
        west__size:                 230,
        west__spacing_open:		    4,
        west__spacing_closed:		4,
        west__togglerTip_closed:	"打开侧栏",
        west__togglerTip_open:	    "关闭侧栏",
        west__resizerTip:	        "重置大小",
        west__resizerCursor :       "col-resize",
        west__sliderTip:	        "打开侧栏",
        west__slideTrigger_open:	"click",
        west__slideTrigger_close:	"click",
        center__maskContents:		 true
    });
});

