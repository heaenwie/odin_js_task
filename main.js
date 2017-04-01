function printDivs(canvasSize) {
  var canvasSize = canvasSize || 16;
  $("div.canvas-div").remove();
  for(i = 0; i < canvasSize; i++) {
    for(j = 0; j < canvasSize; j++) {
        document.getElementById('canvas').innerHTML += '<div class="canvas-div">'+j+'</div>';
    }
  }
  $( "div.canvas-div" ).css( "width", function( index ) {
    return (960/canvasSize)-2;
  });
  $( "div.canvas-div" ).css( "height", function( index ) {
    return (960/canvasSize)-2;
  });
}
function togglOnHover() {
  $("div.canvas-div").hover(function() {
    $(this).addClass("hover");
  })
}
