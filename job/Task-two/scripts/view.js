const view = {
    createImgWind: (imgFirst) => {
        let imgWin = `
        <div id="#fWin" class="imgWin">
            <img src="${imgFirst}">
        </div>`
        
        $("body").append(imgWin);
    },
    createImgSign: (imgSecond) => {
        let imgSign = `
        <div id="#sign" class="imgSign">
            <img src="${imgSecond}">
        </div>`

        $("body").append(imgSign);
    },
    createImgLastWind: (imgLast) => {
        let lastImgs = `        
        <div id="#lWin" class="lastImgs">
            <img src="${imgLast}">
        </div>`

        $("body").append(lastImgs);
    }
}