import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";//import bootstrap for styling
import React, { useState, useEffect } from 'react';//import state and effect capabilities

//import components
import CatCard from './components/CatCard';

function App() {

  //create andinitialize state variables - will house and manage all the cat facts we will bring in
  const [facts, setFacts] = useState([]);

  //now let's change the functionality so instead of clicking a button to display the facts, we want all the facts to display on page load. This will need to use useEffect
  //useEffect will run every single time getCatFacts() runs, unless we give it something in the dependency array (the second argumet)
  useEffect( () => {console.log("Hello")})

  //function definition for button event below - using fetch
  const getCatFacts = () => {
    return(
      fetch("https://cat-fact.herokuapp.com/facts")
        //fetch doesn't return the data in an object so we actually need to return a JSON filetype
        //we need to do it in 2 steps, one to convert the data to JSON
        .then(res => res.json())
        //second to do something with the data - update the state to capture the entire array
        .then(res => setFacts(res.all))
        .catch(err => console.log(err))
    );
  }

  return (
    <div className="App">

      {/* create a button */}
      <button 
        className="btn btn-primary"

        // put a synthetic event on the button
        onClick={getCatFacts}
      >Get Cat Facts</button>   

      {/* loop through each fact to display it  */}
      <div className="d-flex justify-content-around flex-wrap p-5">
        {
          facts.map( (a_fact, i) => {
            return (
              <CatCard key={i} fact={a_fact} />
              //'fact' is the name of the variable used in the component
            );
          })
        }
      </div>
      
    </div>
  );
}

export default App;


//notes
//list of public APIs https://github.com/public-apis/public-apis
//used Cat facts API https://alexwohlbruck.github.io/cat-facts/

//2 ways to get API data: fetch and axios
//fetch is a promise
