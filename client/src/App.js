import React, { Component } from 'react';
import cards from "./cards.json";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";

class App extends Component {

  state = {
    randomId: 1,
    clickedIds: [],
    topscore: 0,
    clicks: 0,
    pokemons: cards
  };


  // when image is clicked trigger this
  handleClicked = id => {
    // store true if clickedId matches an id that has been already clicked
    const hasIdBeenClicked = this.state.clickedIds.filter(clickedId => clickedId === id).length !== 0;
    // each click randomize order of pokemons
    const newRandomizedPokemon = this.generateShuffledArray(this.state.pokemons)

    let updatedState = {
      pokemons: newRandomizedPokemon
    };


    // if id has been clicked then reset clicks to 0
    if (hasIdBeenClicked) {
      updatedState['clicks'] = 0;
      // clear the array of the clickedIds
      updatedState['clickedIds'] = [];
      // you guessed incorrectly alert

    }
    // else update clicks, update clickedIds array, and update topScore
    else {

      updatedState['clickedIds'] = [...this.state.clickedIds, id];
      updatedState['clicks'] = this.state.clicks + 1;

      if (updatedState['topscore'] > this.state.clicks) {
        // do absolutely nothing...
        
      } else {
        console.log(this.state.topscore);
        // else update topScore if topscore is smaller than the number of clicks
        if (this.state.topscore <= this.state.clicks){
          updatedState['topscore'] = this.state.clicks + 1;
        }
        
      }

    }

    console.log(updatedState);
    this.setState(updatedState);

  }



  generateShuffledArray = (array) => {
    const newShuffledArray = [];

    while (array.length > 0) {
      const randVal = array.splice(Math.floor(Math.random() * array.length), 1)[0];
      newShuffledArray.push(randVal);
    }
    return newShuffledArray;
  }


  render() {
    console.log("I've been triggered after render");
    console.log(this.state);
    return (
      <div className="container">
        <Scoreboard
          title="Pokemon Clicker 2019"
          topscore={this.state.topscore}
          clicks={this.state.clicks}
          randomId={this.state.randomId}
        />
        <div className="row">
          {this.state.pokemons.map(pokemon => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              handleClicked={this.handleClicked}
            />

          ))}
        </div>
      </div>
    );
  }
}



export default App;
