class Player{
    constructor()
    {

    }

    getCount()
    {
        console.log("Get the current player count:")
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",function(data){playerCount=data.val();})
        console.log(playerCountRef)
    }
    updateCount(count)
    {
       database.ref('/').update({
        playerCount:count
       });
    }
    update(name){
      var playerIndex="player"+playerCount;
      database.ref(playerIndex).set({
          name:name
      });
    }
}