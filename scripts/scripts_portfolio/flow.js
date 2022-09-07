let set = { index: 0 };

async function onLoad() {
    let path = "../../data/data-portfolio/EN/en-data.json"
    await $.get(path, function (json) { 
      set.data = json.data;
    });

    for (let i = 0; i < set.data.length; i++) {
      view.createPortfolio(i, set.data[i].title, set.data[i].type, set.data[i].img_brand)
    }
    
    const viewPfItem = {};
    const onClick = (event) => {
        for(let i = 0; i < set.data[event.path[1].id].img_brand_items.length; i++) {
            viewPfItem.pgf = set.data[event.path[1].id].img_brand_items;
        }
    }

    for (let j = 0; j < document.getElementsByClassName("card").length; j++) {
      const element = document.getElementsByClassName("card")[j];
      element.addEventListener('click', onClick);
    }

    
    
}
