let data;

const onPageLoad = async () =>
{
	let _uid   = 	   parser.getUid();
	let _iuid  = await parser.getIuid();
	let images = await parser.dataFetch(_uid, _iuid);
	images = images.data.data;

	if (images != undefined)
	{
		$("img").eq(0).attr("src", "data:image/png;base64," + images.img2);
		$("img").eq(1).attr("src", "data:image/png;base64," + images.img1);
		// if (typeof(window.parent.iframeLoaded) == 'function')
		// 	window.parent.iframeLoaded();
	}
	else {
		console.log("uid not found");
	}

	loader.toggle();
}

const disableAnimation = () => {
	$(".bullet div").removeClass("pulseAnimation");
	$(".bullet").attr("onmousedown", "");
}

$(onPageLoad);