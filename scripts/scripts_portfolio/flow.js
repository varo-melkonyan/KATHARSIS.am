let set = { index: 0 };

async function onLoad() {
  if (true) {

  }
  let path = "../../data/data-portfolio/EN/en-data.json"
  await $.get(path, function (json) { 
    set.data = json.data;
    set.headerData = json.dataHeaderEn;

  });
  console.log(set.headerData);
  // for(let h = 0; h <)

  for (let i = 0; i < set.data.length; i++) {
    view.createPortfolio(i, set.data[i].title, set.data[i].type, set.data[i].img_brand)
  }
  
  const viewPfItem = {};
  const onClick = (event) => {
    viewPfItem.pgf = set.data[event.path[1].id].img_brand_items;
    console.log(viewPfItem.pgf);
    set_image_path();
  }

  for (let j = 0; j < document.getElementsByClassName("img-pf").length; j++) {
    const element = document.getElementsByClassName("img-pf")[j];
    element.addEventListener('click', onClick);
  }

  function set_image_path(){
    for (let k = 0; k < viewPfItem.pgf.length; k++) {
      var image_path = `${viewPfItem.pgf[k]}`
      let pfItem = `
        <img src="${image_path}">
      `;
      $("#content_pf").append(pfItem);
    }
  }
  
}
