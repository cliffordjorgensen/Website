
var superLame = "congratulations you are a crypto APE";
var superApe = ["bitcoin","hydra","kcs","matic"];
var userGuess = prompt("What is the best crypto currency?");
var userGuessLower = userGuess.toLowerCase();

var queryURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";  
// simple/price?ids=hydra%2Cbitcoin&vs_currencies=usd

$.ajax({
  url:queryURL,
  method: "GET"
}).then(function(response){
  results = response
  
  for (var i = 0; i < results.length; i ++ ){
    var coinName = results[i].name;
    var coinPrice =results[i].current_price;
    console.log(coinName)
    console.log(coinPrice)
    var bitDiv = $("<div class=table>");
    bitDiv.append(coinName, " = ", coinPrice, $("<br>"));
    
    $("#bitcoin-price").append(bitDiv);

  };

})

if (superApe.indexOf(userGuessLower) === -1){
  alert ("Bitcoin is Better");
} 
else {
  alert(superLame);
}

$(document).ready(function(){

$(".force-button").on("click", function(){
  var person = $(this).attr("data-person");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var personImage = $("<img>");
        personImage.attr("src", results[i].images.fixed_height.url);
        gifDiv.prepend(p);
        gifDiv.prepend(personImage);

        $("#gifs-appear-here").prepend(gifDiv);
      }
    });
  });
  $(".time-button").on("click", function(){
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
  
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
  
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);
          gifDiv.prepend(p);
          gifDiv.prepend(personImage);
  
          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
    });




});
