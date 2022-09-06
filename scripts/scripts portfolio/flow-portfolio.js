let set = { index: 0 };

async function onLoad() {
    $.getJSON( "../../data/data-portfolio/EN/en-data.json", function( data ) {
        $.each( data, function() {
          set.data_en = data.data;
        });
    });
    console.log(set);
    // view_pf.createPortfolio(-1, "", "left","");
    // view_pf.createPortfolio(0, data_en.data[0].text, "center",set.data[0].title);
    // view_pf.createPortfolio(1, set.data[1].text, "right",set.data[1].title);
    
    loader.toggle();
}
onLoad();