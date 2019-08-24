
    var APIKey = "2q81PXf3i1IlnHtQhpx1EeziNEU36U6C";    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIKey;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      console.log(queryURL);
      console.log(response);

      
      $(".exampleFormControlInput1").html("search: " + response.headline);
      $(".wind").html("Wind: "+ response.name);
    //   $(".humidity").html("Humidity: " + response.name);
    //   $(".temp").html("Temp: " + response.name);

    });