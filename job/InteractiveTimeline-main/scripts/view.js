const view = {
    textOpen: false,

    addMedia: (key, media) => {
        switch (media.type) {
            case "image":
                $(".wrapperContainer").append(`
                <div id="${key}" class="wrapper">
                    <img src="${media.image}">
                    <div class="mask"></div>
                    <p class="key">${key}</p>
                    <div class="gradientContainer">
                        <div class="circle"></div>
                        <p class="text">${media.text}</p>
                        <div class="gradient"></div>
                    </div>
                </div>`);

                break;
            case "sliding_images":
                $(".sliderContainer").append(`
                <div id="${key}" class="wrapper">
                    <div class="comparison-slider">
                        <img src="${media.firstImage}">
                        <div class="resize resizeAnimation" style="width: 98.5%;">
                            <img src="${media.secondImage}">
                        </div>
                        <div class="bullet bulletAnimation">
                            <div><img src="images/icons/slider.png"></div>
                        </div>
                    </div>
                </div>`);
                break;
            case "video":
                $(".sliderContainer").append(`
                <div id="${key}" class="wrapper">
                    ${media.embed}
                </div>
                `);
                break;
        }
    },
    activate: async(obj) => {
        $(".wrapper .key").css("opacity", 0);
        obj.addClass("active");
        $(".active").addClass("open");

        $(".active .text").css("position", "absolute");
        let height = parseFloat($(".active .text").css("height"));
        
        $(".active .gradientContainer").css("height", height + 77);
        $(".active .text").css("position", "relative");
        await timeout(300);
        $(".active .text").css("opacity", 1);

        view.textOpen = true;
    },
    deactivate: async (obj) => {
        $(".wrapper .key").css("opacity", 1);

        view.closeText();
        obj.removeClass("active");

        view.textOpen = false;
    },
    toggleText: async () => {
        view.textOpen = !view.textOpen;

        if (view.textOpen) {
            view.activate(activatedYear);
        } else {
            view.closeText();
        }
    },
    closeText: async () => {
        $(".active .gradientContainer").css("height", 56);
        $(".active .text").css("opacity", 0);
        $(".active").removeClass("open");
    }
}