$(".toggleButton").hover(function(){
	$(this).addClass("highlighted")
}, function(){
	$(this).removeClass("highlighted");
})

$(".toggleButton").click(function() {
	$(this).toggleClass("active");
	$(this).removeClass("highlighted")
	var panelId = "#" + $(this).attr("id") + "Panel";
	$(panelId).toggleClass("hidden");
	var activePanels = 4 - $(".hidden").length;
	$(".panel").width(($(window).width()/ activePanels)-15);
})

$('.toggleButton').css('cursor', 'pointer');

$(".panel").height($(window).height()-$("#header").height()-30)

$(".panel").width(($(window).width()/2)-15);

function changeOutput(){
	var css = $("#cssPanel").val()
	var html = $("#htmlPanel").val()
	var template = `<html>
						<head>
							<style>
							  ${css}
							</style>
						</head>
						<body>
						  ${html}
						</body>
					</html>`
	$("iframe").contents().find("html").html(template);
	document.getElementById('outputPanel').contentWindow.eval($("#jsPanel").val());
}

$("textarea").on('change keyup paste click', changeOutput);

$(window).on('load', changeOutput);