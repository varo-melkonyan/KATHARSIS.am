console.log("awf")
const data = [];
$.getJSON( "data/data-portfolio/EN/en-data.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
  });