// {/* <a href="portfolio_items.html">
// <div id="${i}" class="card ${i}">
//     <img src="${img_brand}" class="img-pf"></img>
//     <div class="pf_text_holder pf_text_holder_${i}">
//         <h1 class="title">${title}</h1>
//         <h6 class="type">${type}</h6>
//     </div>
// </div>
// </a> */}
const view = {
    createPortfolio: (i, title, type, img_brand) => {
        let portfolio = `

                <div id="${i}" class="card ${i}">
                    <img src="${img_brand}" class="img-pf"></img>
                    <div class="pf_text_holder pf_text_holder_${i}">
                        <h1 class="title">${title}</h1>
                        <h6 class="type">${type}</h6>
                    </div>
                </div>

        `;

        $("#content_pf").append(portfolio);
        $(`#${i}`).css("margin-left", "1.2vw");
        
        $(`#${i}`).hover(function() {
            $(`.pf_text_holder_${i}`).css("height","auto");
            }, function() {
                $(`.pf_text_holder_${i}`).css("height","0");
        });
    }
};

// const viewPfItem = {
//     getPfItem: (title, img_brand_items, video_brand) => {
//         let pfItem = `video_brand
//         `;
//     }
// }

onLoad();

// viewPfItem();