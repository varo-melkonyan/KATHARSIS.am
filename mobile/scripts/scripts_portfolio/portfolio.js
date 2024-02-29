const data_en = [];
const data_hy = [];

$.getJSON( "../../data/data-portfolio/EN/en-data.json", function( data ) {
    $.each( data, function() {
      data_en.push( data);
    });
});
$.getJSON( "../../data/data-portfolio/HY/hy-data.json", function( data ) {
    $.each( data, function() {
      data_hy.push( data);
    });
});