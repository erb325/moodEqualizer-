describe("Mood", function() {

    it("should define an app", function(){
        expect(app).toBeDefined();
    });

    describe("moods", function(){
        it("should list all available moods", function() {
            expect(app.mainMoods()).toBeEqual("angry", "happy","sad", "party", "relaxing");
        });

        describe("angry", function(){
            expect(app.mood("angry")).toBeEqual(["agressive","angry","angst-ridden","complex","dark","disturbing","harsh","industrial","intense","manic","rebellious","strange"]);
        });

        describe("happy", function(){
            expect(app.mood("happy")).toBeEqual(["calming","carefree","cheerful","cool","fun","futuristic","gentle","gleeful","happy","humorous","joyous","playful","light","lively","sweet","theater","warm","whimsical"]);
        });
        describe("sad", function(){
            expect(app.mood("sad")).toBeEqual(["cold","dramatic","eerie","gloomy","haunting","melancholia","poignant","ominous","pastoral","quiet","sad","sentimental","strange"]);
        });
    });
});



