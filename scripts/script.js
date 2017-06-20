


$(document).ready(function(){

  var $pendown = $("#pendown");
  var $clickcolor = $("#clickcolor");
  var $selectcolor = $("#selectcolor");
  var $selectcolor = $("#templatecolor");
  var $selectcolor = $("#randomcolor");


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
    $('.sketchboard-cell').css({'height': newDimensionText, 'width':newDimensionText})

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

createDivs(2);


})
