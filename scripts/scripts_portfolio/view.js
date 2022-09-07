const view = {
    createPortfolio: (i, title, type, img_brand) => {
        let portfolio = `
            <div id="${i}" class="card ${i}">
                <img src="${img_brand}" class="img-pf"></img>
                <p class="title">${title}</p>
                <p class="type">${type}</p>
            </div>
        `;

        $("#content_pf").append(portfolio);
        $(`#${i}`).css("margin-left", 24);
    }
};
onLoad();
