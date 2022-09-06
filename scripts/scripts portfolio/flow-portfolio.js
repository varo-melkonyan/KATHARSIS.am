
async function onLoad() {
    console.log(view_pf);
    view_pf.createPortfolio(-1, "", "left","");
    view_pf.createPortfolio(0, data_en.data[0].text, "center",set.data[0].title);
    view_pf.createPortfolio(1, set.data[1].text, "right",set.data[1].title);
    
    loader.toggle();
}
onLoad();