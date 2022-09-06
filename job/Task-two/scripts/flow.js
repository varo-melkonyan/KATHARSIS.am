let firstSet = {};
let secondSet = {};
let lastSet = {};

async function onLoad() {
    await fetch('data.json').then(res => res.json()).then(json => {
        firstSet.data = json.firstImgs;
        secondSet.data = json.secondImgs;
        lastSet.data = json.lastImgs;
    });

    for(let i = 0; i < firstSet.data.length; i++) {
        view.createImgWind(firstSet.data[i].img);
    }

    for(let i = 0; i < secondSet.data.length; i++) {
        view.createImgSign(secondSet.data[i].img);
    }

    for(let i = 0; i < lastSet.data.length; i++) {
        view.createImgLastWind(lastSet.data[i].img);
    }
}

const resFunc = (direction) => {
    if(direction > 0) {
        alert('true');
    }
    else {
        alert('false');
    }
}

$(onLoad);