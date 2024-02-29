document.onreadystatechange = function() {
	if (document.readyState !== "complete") {
		$("#all_content").css("visibility", "hidden");
		$("#loadingScreen").css("visibility", "visible");
	} else {
		$("#all_content").css("visibility", "visible");
		$("#all_content").css("display", "block");
		$("#loadingScreen").css("visibility", "hidden");
	}
};