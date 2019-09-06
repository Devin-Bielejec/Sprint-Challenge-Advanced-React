import React, { useState } from "react";
import { PlayerComponent } from "./PlayerComponent";

const PlayersComponent = (props) => {
    console.log("Players component", props.players);
    //Custom hook coming right up


    return(
      <div>
        {props.players.map(player => <PlayerComponent player={player}/>)}
      </div>
    )
}



export { PlayersComponent };