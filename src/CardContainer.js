import React from "react";
import Card from "./Card";
import games from "./games.json"

class CardContainer extends React.Component{
  state ={
    games: games
  }
render(){
  return(
    <div className="container">
    {/* Cards for projects */}
    {this.state.games.map(games =>{
          return(
            
              
            <Card key={games.id}
            name={games.name} description={games.description} link={games.link} button={games.button}
            />
            
            
          )
        })}
    </div>
  )
}
}

export default CardContainer