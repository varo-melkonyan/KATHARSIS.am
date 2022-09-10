async function onLoad() {
    let currentPfTitle = localStorage.getItem('currentPfTitle');
    let viewPfItemTitle = JSON.parse(currentPfTitle);
    let currentPf = localStorage.getItem('currentPf');
    let viewPfItem = JSON.parse(currentPf);
    for (let k = 0; k < viewPfItem.length; k++) {
        var image_path = `${viewPfItem[k]}`;
        let pfItem = `
          <img src="${image_path}">
        `;
        $("#content_pf_item").append(pfItem);
    }

      $(".pf_title_p").text(viewPfItemTitle);
}
onLoad();