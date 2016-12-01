// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

var prediction;
var all = "http://www.mattbowytz.com/simple_api.json?data=all";
var resultArray = [[]];
var hrefArray = [];
var hrefAddr;

var originalInput;

(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');
})();



$(document).ready(function(){
  $.getJSON(all, function(result){
     console.log(result);
     prediction = "";
     resultArray[0] = result.data.interests;
     resultArray[1] = result.data.programming;
  });
});

$(".flexsearch-input").keyup(function(){
  originalInput = $(".flexsearch-input").val();
  prediction = "";
  
  for(var i = 0; i < resultArray.length; i++){
    for(var j = 0; j < resultArray[i].length; j++){
      if(originalInput == ""){
        break;
      }
      if(resultArray[i][j].toLowerCase().startsWith(originalInput.toLowerCase())){
        hrefArray = resultArray[i][j].split(" ");
        //creating the href for google search engine
        hrefAddr = "http://www.google.com/search?q=";
        for(var k = 0; k < hrefArray.length; k++){
          hrefAddr += hrefArray[k];
          if(k<hrefArray.length-1){
            hrefAddr += "+";
          }
        }
        prediction += "<a href=\"" + hrefAddr + "\">" + resultArray[i][j] + "</a>" + "<br>";
      }
    }
  }
  $("#result").html(prediction);
});