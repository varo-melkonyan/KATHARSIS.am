const loader = {
	open: true,
	toggle: () =>
	{
		if (true)
		{
			setTimeout(() => {
				$("#loadingScreen").hide();
				$('html').addClass('hide-scrollbar');
				$("#all_content").css("display", "block");
			}, 1000);
		}
	},
}