describe("Mood", function() {

    it("should define an app", function(){
        expect(app).toBeDefined();
    });

    describe("moods", function(){
        it("should list all available moods", function() {
            expect(app.mainMoods()).toEqual(["angry", "happy","sad", "party", "relaxing"]);
        });

        describe("angry", function(){
            expect(app.mood("angry")).toEqual(["aggressive","angry","angst-ridden","complex","dark","disturbing","harsh","industrial","intense","manic","rebellious","strange"]);
        });

        describe("happy", function(){
            expect(app.mood("happy")).toEqual(["calming","carefree","cheerful","cool","fun","futuristic","gentle","gleeful","happy","humorous","joyous","playful","light","lively","sexy", "sweet","theater","warm","whimsical"]);
        });
        describe("sad", function(){
            expect(app.mood("sad")).toEqual(["cold","dramatic","eerie","gloomy","haunting","melancholia","poignant","ominous","pastoral","quiet","sad","sentimental","strange"]);
        });
    });
});



