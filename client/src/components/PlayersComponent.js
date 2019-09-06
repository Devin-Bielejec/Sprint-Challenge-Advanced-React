import React, { useState } from "react";
import { PlayerComponent } from "./PlayerComponent";

const PlayersComponent = (props) => {
    return(
      <div className="players">
        {props.players.map(player => <PlayerComponent player={player}/>)}
      </div>
    )
}



export { PlayersComponent };