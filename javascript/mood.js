var App = {
  moods: {
    angry: ["aggressive", "angry", "angest-ridden", "complex", "dark", "disturbing", "harsh", "industrial", "intense", "manic", "rebellious", "strange"],
    happy: ["calming", "carefree", "cheerful", "cool", "fun", "futuristic", "gentle", "gleeful", "happy", "humorous", "joyous", "playful", "light", "lively", "sexy", "sweet", "theater", "warm", "whimsical"],
    sad: ["cold", "dramatic", "eerie", "gloomy", "haunting", "melancholia", "poignant", "ominous", "pastoral", "quiet", "sad", "sentimental", "strange"],
    party: ["bouncy", "energetic", "enthusiastic", "epic", "fun", "funky", "groovy", "hyponic", "party music", "rowdy", "theater", "trippy"],
    relaxing: ["ambient", "dreamy", "elegant", "intimate", "mediation", "passionate", "peaceful", "mystical", "mellow", "laid-back", "reflective", "relax", "romantic", "sexy", "smooth", "soothing", "sophisticated", "spacey", "spiritual"]
  }
};

App.init = function() {
  $("#sliders > span").each(function() {
    // read initial values from markup and remove that
    var value = parseInt($(this).text(), 10);
    $(this).empty().slider({
      value: value,
      range: "min",
      animate: true,
      orientation: "vertical"
    });
  });

}