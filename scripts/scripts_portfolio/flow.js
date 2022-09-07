let set = { index: 0 };

async function onLoad() {
    let path = "../../data/data-portfolio/EN/en-data.json"
    await $.get(path, function (json) { 
      set.data = json.data;
    });

    for (let i = 0; i < set.data.length; i++) {
      view.createPortfolio(i, set.data[i].title, set.data[i].type, set.data[i].img_brand)
    }
    
    loader.toggle();
}
