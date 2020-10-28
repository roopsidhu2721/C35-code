class Game{
    constructor()
    {

    }

    getState()
    {
        console.log("Lets get the game state:")
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){gameState=data.val();})
        console.log(gameStateRef)
    }
    update(state)
    {
       database.ref('/').update({
           gameState:state
       });
    }
    start(){
        if(gameState===0)
        {
            console.log("New player getting created:")
            player=new Player();
            player.getCount();
            console.log("New Form is created:")
            form=new Form();
            form.display();
        }
    }
}