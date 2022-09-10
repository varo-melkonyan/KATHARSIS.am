let set = { index: 0 };
const viewPfItem = {};
async function onLoad() {
  if (true) {

  }
  let pathEn = "../../data/data-portfolio/EN/en-data.json"
  let pathHy = "../../data/data-portfolio/HY/hy-data.json"
  await $.get(pathEn, function (json) {
    localStorage.setItem('testObject', JSON.stringify(json));
    let localData = localStorage.getItem('testObject');
    set.data = JSON.parse(localData).data;
    set.headerData = JSON.parse(localData).dataHeaderEn;
  });

  for (let i = 0; i < set.data.length; i++) {
    view.createPortfolio(i, set.data[i].title, set.data[i].type, set.data[i].img_brand)
  }
  

  const onClick = (event) => {
    viewPfItem.pgf = set.data[event.path[1].id].img_brand_items;
    localStorage.setItem('currentPf', JSON.stringify(viewPfItem.pgf));
    localStorage.setItem('currentPfTitle', JSON.stringify(set.data[event.path[1].id].title));
    // let currentPf = localStorage.getItem('currentPf');
    // viewPfItem.currentPf = JSON.parse(currentPf);
    set_image_path();
  }

  for (let j = 0; j < document.getElementsByClassName("img-pf").length; j++) {
    const element = document.getElementsByClassName("img-pf")[j];
    element.addEventListener('click', onClick);
  }

  function set_image_path(){
    for (let k = 0; k < viewPfItem.pgf.length; k++) {
      var image_path = `${viewPfItem.pgf[k]}`;
      let pfItem = `
        <img src="${image_path}">
      `;
      $("#content_pf_item").append(pfItem);
    }

  }
  
}
