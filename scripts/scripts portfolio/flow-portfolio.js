async function onLoad() {
    let path = parser.getParams();
    await $.get(path, function (json) { 
          set.data = json.data;
    });

    view.createCard(-1, "", "left","");
    view.createCard(0, set.data[0].text, "center",set.data[0].title);
    view.createCard(1, set.data[1].text, "right",set.data[1].title);
    
    loader.toggle();
}