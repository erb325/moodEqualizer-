var app = {
    moods : { angry: ["aggressive", "angry", "angst-ridden", "complex", "dark", "disturbing", "harsh", "industrial",
                        "intense", "manic", "rebellious", "strange"],
               happy : ["calming", "carefree", "cheerful", "cool", "fun", "futuristic", "gentle", "gleeful", "happy", "humorous",
                         "joyous", "playful", "light", "lively", "sexy", "sweet", "theater", "warm", "whimsical"]    ,
               sad: ["cold", "dramatic", "eerie", "gloomy", "haunting", "melancholia", "poignant", "ominous", "pastoral",
                       "quiet", "sad", "sentimental", "strange"],
               party : ["bouncy", "energetic", "enthusiastic", "epic", "fun", "funky", "groovy", "hyponic","party music",
                        "rowdy", "theater", "trippy"] ,
               relaxing: ["ambient", "dreamy", "elegant", "intimate", "mediation", "passionate", "peaceful", "mystical",
                          "mellow", "laid-back","reflective","relax", "romantic", "sexy", "smooth","soothing", "sophisticated",
                            "spacey", "spiritual"]
                },
   mainMoods: function(){
       return ["angry", "happy","sad", "party", "relaxing"];
   }  ,
    mood : function(moodName){

        return this.moods [moodName];
    }

};
