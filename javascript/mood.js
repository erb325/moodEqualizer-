var App = {
  apiURL:"http://developer.echonest.com/api/v4/song/search?api_key=4LVJP0LNDBU3CDUS6&format=json&results=10&mood=",
  moods: {
    angry: ["aggressive", "angry", "angst-ridden", "complex", "dark", "disturbing", "harsh", "industrial", "intense", "manic", "rebellious", "strange"],
    happy: ["calming", "carefree", "cheerful", "cool", "fun", "futuristic", "gentle", "gleeful", "happy", "humorous", "joyous", "playful", "light", "lively", "sexy", "sweet", "theater", "warm", "whimsical"],
    sad: ["cold", "dramatic", "eerie", "gloomy", "haunting", "melancholia", "poignant", "ominous", "pastoral", "quiet", "sad", "sentimental", "strange"],
    party: ["bouncy", "energetic", "enthusiastic", "epic", "fun", "funky", "groovy", "hyponic", "party music", "rowdy", "theater", "trippy"],
    relaxing: ["ambient", "dreamy", "elegant", "intimate", "mediation", "passionate", "peaceful", "mystical", "mellow", "laid-back", "reflective", "relax", "romantic", "sexy", "smooth", "soothing", "sophisticated", "spacey", "spiritual"]
  }
};
App.getAllmoods = function(){
    var moods = [];
    $("#sliders > span").each(function(){
        var type = $(this).attr("data");
        var index = $(this).slider("value");
        if(index == 0) {
            return;
        }
        moods.push(App.moods[type][index]);
    });
    return moods.join();
}
App.searchMoods = function(terms){
    console.log(App.apiURL+terms);
    $.ajax(App.apiURL+terms).done(function(data){
        App.showNames(data.response.songs);
    });

}
App.showNames = function(songs){
    if(songs == undefined || songs.length == 0) return;
    for (var song in songs ) {
        var li = $("<li/>").html(songs[song]['artist_name'] + ' - ' + songs[song]['title']);
        $("#artists").append(li);


    }

};
App.init = function() {
  $("#sliders > span").each(function() {
    // read initial values from markup and remove that
    var value = parseInt($(this).text(), 10);
    console.log(value);
    var slide = $(this);
    slide.empty().slider({
      value: 0,
      range: "min",
      min: 0,
      max: value-1,
      animate: true,
      orientation: "vertical",
      change:function(event, ui){
         App.searchMoods(App.getAllmoods());
      }
    });

  });

};
