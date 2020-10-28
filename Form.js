class Form{
    constructor()
    {

    }
    display()
    {
        console.log("Creating the form:")
       
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);

        var input=createInput("Name");
        var button=createButton("Play");
    
        input.position(130,160);
        button.position(250,200);


        var greeting=createElement("h3");
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            console.log("Updating the playercount and name in DB:")
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello"+name);
            greeting.position(130,160);
        });
    }
}