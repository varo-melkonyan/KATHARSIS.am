let points = {
    "1999": {
        type: "image",
        image: "images/smart gallery3.png",
        text: "With so many different ways today to find information online, it can sometimes be hard to know where to go to first. I want to look at the major and most effective ways to find information online. The biggest and most commonly used method is to use a search engine such as: Google, Yahoo, or Msn. All three of these search engines offer similar features. Text search, Image search, Local search, Product search, are a few of the services they offer. It used to be only a few years ago where Google dominated the Search Engine market. Due largely to the fact that their search technology was the most advanced."
    },
    "1400": {
        type: "image",
        image: "images/smart gallery4.png",
        text: "With so many different ways today to find information online, it can sometimes be hard to know where to go to first. I want to look at the major and most effective ways to find information online. The biggest and most commonly used method is to use a search engine such as: Google, Yahoo, or Msn. All three of these search engines offer similar features. Text search, Image search, Local search, Product search, are a few of the services they offer. It used to be only a few years ago where Google dominated the Search Engine market. Due largely to the fact that their search technology was the most advanced."
    },
    "1300": {
        type: "image",
        image: "images/smart gallery5.png",
        text: "With so many different ways today to find information online, it can sometimes be hard to know where to goo use a search engine such as: Google, Yahoo, or Msn. All three of these search engines offer similar features. Text search, Image search, Local search, Product search, are a few of the services they offer. It used to be only a few years ago where Google dominated the Search Engine market. Due largely to the fact that their search technology was the most advanced."
    },
    "1200": {
        type: "image",
        image: "images/smart gallery6.png",
        text: "With so many different ways today to find information online, it can sometimes be hard to know where to go to first. I want to look at the major and most effective ways to find information online. The biggest and most commonly used method is to use a search engine such as: Google, Yahoo, or Msn. All three of these search engines offer similar features. Text search, Image search, Local search, Product search, are a few of the services they offer. It used to be only a few years ago where Google dominated the Search Engine market. Due largely to the fact that their search technology was the most advanced.imes be hard to know where to go to first. I want to look at the major and most effective ways to find information online. The biggest and most commonly used ]"
    },
    "1100": {
        type: "image",
        image: "images/smart gallery5.png",
        text: "With so many different ways today to find information online, it can sometimes be hard to know where to go to first. I want to look at the major and most effective ways to find information online. The biggest and most commonly used method is to use a search engine such as: Google, Yahoo, or Msn. All three of these search engines offer similar features. Text search, Image search, Local search, Product search, are a few of the services they offer. It used to be only a few years ago where Google dominated the Search Engine market. Due largely to the fact that their search technology was the most advanced."
    },
    "1000": {
        type: "image",
        image: "images/smart gallery3.png",
        text: "Whard to similar features. Text search, Image search, Local search, Product search, are a few of the services they offer. It used to be only a few years ago where Google dominated the Search Engine market. Due largely to the fact that their search technology was the most advanced."
    },
    "900": {
        type: "image",
        image: "images/smart gallery5.png",
        text: "With so many different ways today to find information online, it can sometimes be hard to know where to go to first. I want to look at the major and most effective ways to find information online. The biggest and most commonly used method is to use a search engine such as: Google, Yahoo, or Msn. All three of these search engines offer similar features. Text search, Image search, Local search, Product search, are a few of the services they offer. It used to be only a few years ago where Google dominated the Search Engine market. Due largely to the fact that their search technology was the most advanced."
    },
    "800": {
        type: "image",
        image: "images/smart gallery3.png",
        text: "With so many different ways today to find information online, it can sometimes be hard to know where to go to first. I want to look at the major and most effective ways to find id."
    }
}

let activatedYear = -1;

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const onPageLoad = () => {
    for (let key in points) {
        view.addMedia(key, points[key]);
    }

    $(".wrapper").mouseenter(async function () {  
        view.activate($(this));
        activatedYear = $(this);
    }).mouseleave(function () {
        view.deactivate($(this));
    });

    $(".circle").click(function () {
        view.toggleText();
    });

    loader.toggle();
}

$(onPageLoad);