const view_pf = {
    createPortfolio: (i, title, type, img_brand) => {
        let portfolio = `
            <div id="${i}" class="card ${i}">
                <img src="${img_brand}" class="img-pf"></p>
                <p class="title">${title}</p>
                <p class="type">${type}</p>
            </div>
        `;

        $("body").append(portfolio);
    }
};
view_pf.createPortfolio();
const view = {
    createCard: (i, text, type, title) => {
        if (text.length > 650) {
            $(`#${i} .text`).css("top","153.05px");
            $(`#${i} .text`).html(text.slice(0, 650).concat('...'));
        }

        let card = `
            <div id="${i}" class="card ${type}">
                <p class="title">${title}</p>
                <p class="text">${text}</p>
                <label onClick="readMore(${i})" class="readMore" style="display: none">ReadMore<label>
            </div>
        `;

        $("body").append(card);
        $(`#${i}`).css("margin-left", 2400 * i);
        if(text.length < 550) {
            $(`#${i} .text`).css("top","auto");
            $(`#${i} .text`).css("margin-top","105px");
        }

        if (text.length > 650) {
            $(`#${i} .readMore`).css("display", "flex");
        }
    },
    editCard: (i, text, title) => {
        if(text.length < 650 && title.length < 1) {
            $(`#${i} .text`).css("margin-top","0");
            $(`#${i} .text`).css("top","auto");
            $(`#${i} .text`).html(text);
            $(`#${i} .readMore`).css("display", "none");
        }
        else if (text.length > 650 && title.length < 1) {
            $(`#${i} .text`).css("margin-top","0");
            $(`#${i} .text`).css("top","auto");
            $(`#${i} .text`).html(text.slice(0, 650).concat('...'));
            $(`#${i} .readMore`).css("display", "flex");
        }
        else if (text.length < 650 && title.length > 1) {
            $(`#${i} .text`).css("margin-top","105px");
            $(`#${i} .text`).css("top","auto");
            $(`#${i} .text`).html(text);
            $(`#${i} .readMore`).css("display", "none");
        }
        else if (text.length > 550 && title.length > 1) {
            $(`#${i} .text`).css("margin-top","0");
            $(`#${i} .text`).css("top","153.05px");
            $(`#${i} .text`).html(text.slice(0, 530).concat('...'));
            $(`#${i} .readMore`).css("display", "flex");
        }
        else if ($(`#${i} .text`).css("height") > "401px") {
            $(`#${i} .text`).css("margin-top","0");
            $(`#${i} .text`).css("top","153.05px");
            $(`#${i} .text`).html(text.slice(0, 650).concat('...'));
            $(`#${i} .readMore`).css("display", "flex");
        }
       
        $(`#${i} .title`).html(title);
    },
    scrollCards: async (direction) => {
        if (direction > 0) {
            let count = -1;
            for(let i = set.index - 1; i < set.index + direction; i++)
            {
                $(`#${i}`).css("margin-left", 2400 * count);
                count++;
            }
        } else {
            let count = 1;
            for(let i = set.index + 1; i > set.index + direction; i--)
            {
                $(`#${i}`).css("margin-left", 2400 * count);
                count--;
            }
        }

        $(".card").removeClass("left center right");
        $(`#${set.index}`).addClass("center");
        
        view.editCard(set.index, set.data[set.index].text, set.data[set.index].title);
        
        if (direction > 0) {
            $(`#${set.index - 1}`).addClass("left");
            $(`#${set.index - 2}`).addClass("right");
            $(`#${set.index - 2}`).hide();
            setTimeout(() => {
            $(`#${set.index - 2}`).css("margin-left", "2400px");
            $(`#${set.index - 2}`).attr("id", set.index + 1);
            },10);

            setTimeout(() => {
                $(`#${set.index + 1}`).show();
            },100);
        } else {
            $(`#${set.index + 1}`).addClass("right");
            $(`#${set.index + 2}`).addClass("left");
            $(`#${set.index + 2}`).hide();
            setTimeout(() => {
            $(`#${set.index + 2}`).css("margin-left", "-2400px");
            $(`#${set.index + 2}`).attr("id", set.index - 1);
            },10);
            setTimeout(() => {
                $(`#${set.index - 1}`).show();
            },100);
        }
    },
    reset: (index) => {
        $(".left").css("margin-left", "-2400px");
        $(".center").css("margin-left", "0px");
        $(".right").css("margin-left", "2400px");
    }
}