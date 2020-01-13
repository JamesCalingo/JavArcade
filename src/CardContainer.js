import React from "react";
import Card from "./Card";
import games from "./games.json"

class CardContainer extends React.Component(){
  state ={
    games: games
  }
render(){
  return(
    <div className="container"></div>
  )
}
}

export default CardContainer