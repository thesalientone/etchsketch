


$(document).ready(function(){

  var $pendown = $("#pendown");
  var $clickcolor = $("#clickcolor");
  var $selectcolor = $("#selectcolor");
  var $templatecolor = $("#templatecolor");
  var $randomcolor = $("#randomcolor");
  var colorscheme = "selectcolor"


  function createDivs(number) {
    var divText = ""
    var newDimensions = 500 / number;
    var newDimensionText = newDimensions.toString() + "px"

    $('.sketchboard-cells').remove();
    $('.sketchboard-container').append("<div class='sketchboard-cells'>");

    var idList = createIds(number);

    for (var divId in idList) {
      divText = "<div class='sketchboard-cell' id='" + idList[divId] + "'></div>";

      $('.sketchboard-cells').append(divText);


    }

    $('.sketchboard-container').append("</div");
    $('.sketchboard-cell').css({'height': newDimensionText, 'width':newDimensionText, "margin-bottom": -number.toString()})
    
  }
  function createIds(number) {

    var idList = [];
    var idPosition = "";
    for(i = 1; i <= number; i++) {
      for(j = 1; j<= number; j++) {
        idPosition = i.toString() + "x" + j.toString();
        idList.push(idPosition)
        console.log(idPosition);

      }
    }
    return idList
  }


createDivs(7);
$('.sketchboard-cell').click(function(){

  colorCells($(this));

})


$('.sketchboard-cell').hover(function(){
  if($("#pendown").is(":checked")) {
    colorCells($(this));
  }

})

$('input:radio[name=colorscheme]').click(function(){
    colorscheme = $(this).attr("id");
    alert(colorscheme);

})
$(":button").click(function() {
    var resize_number = $("#resize-number").val()
    if(Number.isInteger(parseInt(resize_number))) {
      createDivs(resize_number);
    } else {
      alert("Please enter an integer number to resize.")
    }

})


  function colorCells(cellObject) {

    switch(colorscheme)  {
     case "selectcolor":
       cellObject.css("background-color", "red");
     break;
     case "randomcolor":
       colorList = [];
       for(i = 0; i <3; i ++) {
          colorList[i] = Math.floor(Math.random() * 256)
       }
       var randomColor = "rgb(" + colorList[0] + "," + colorList[1] + "," + colorList[2] + ")"
       cellObject.css("background-color", randomColor)
     break;
   }
  }

})
