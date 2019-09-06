import React, { useState } from "react";
import { useName } from "./PlayersComponent";

const PlayerComponent = (props) => {
    const useValue = initialValue => {
        const [value, setValue] = useState(initialValue);
        const handleChanges = updatedValue => {
          setValue(updatedValue);
        }
        return [value, setValue, handleChanges];
      };
  
      const [newName, setNewName, handleNewName] = useValue("");
      const [newCountry, setNewCountry, handleNewCountry] = useValue("")
    return(
        <div key={props.player.id} id={props.player.name}>
            <h1 className="name">{newName}</h1>
            <h1 className="country">{newCountry}</h1>
            <button value={props.player.name} onClick={(e)=> handleNewName(e.target.value)}>Say My Name</button>
            <button value={props.player.country} onClick={(e)=> handleNewCountry(e.target.value)}>What's my Country?</button>
        </div>
    )
}

export { PlayerComponent };