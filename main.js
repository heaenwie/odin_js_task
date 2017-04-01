function printDivs(canvasSize) {
  var canvasSize = canvasSize || 16;
  $("div.canvas-div").remove();
  for(i = 0; i < canvasSize; i++) {
    for(j = 0; j < canvasSize; j++) {
        document.getElementById('canvas').innerHTML += '<div class="canvas-div"></div>';
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
  $("div.canvas-div").mouseover(function() {
    $(this).addClass("hover");
    $(this).css( "background", function( index ) {
      return randomColour();
    });
  })
}

function randomColour () {
    // Set variables to number between 0 and 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    // Create a string matching rbg(000,000,000) for use in CSS
    rgb = "rgb(" + r + "," + g +"," + b + ")"
    return rgb;
}
