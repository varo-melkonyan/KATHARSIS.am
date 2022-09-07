const view = {
    createPortfolio: (i, title, type, img_brand) => {
        let portfolio = `
            <div id="${i}" class="card ${i}">
                <img src="${img_brand}" class="img-pf"></img>
                <div class="pf_text_holder">
                    <h1 class="title">${title}</h1>
                    <h6 class="type">${type}</h6>
                </div>
            </div>
        `;

        $("#content_pf").append(portfolio);
        $(`#${0}`).css("margin-left", 0);
        $(`#${i}`).css("margin-left", 24);
    }
};
onLoad();