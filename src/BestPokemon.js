import React from "react";

function BestPokemon(props) {
     return <div>
       <p>
      My favorite Pokémon is Squirtle
      </p>
      <ul>
        {props.abilities.map( ability => <li>{ability}</li>)}
      </ul>
     </div>
  }
  
export default BestPokemon;
