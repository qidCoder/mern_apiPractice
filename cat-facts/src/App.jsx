import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";//import bootstrap for styling
import React, { useState, useEffect } from 'react';//import state and effect capabilities

//import components
//removed import of FactCard as the Display component takes care of it now
import Display from "./components/Display";//this will be the component we will make the API request in 

function App() {

  //create and initialize state variables - will house and manage all the facts we will bring in
  //removed setFacts as the Display component takes care of that now
  const [input, setInput] = useState('');//for form input

  //state variables for setting up the drop down menu in the form
  const categories = ['','horse','cat','snail','dog'];//dropdown categories to choose from
  const [category, setCategory] = useState(categories[0]);//updating variable to capture what user actually selected

  return (
    <div className="App">
      {/* create form to hold the input textbox */}
      <form className="col-3 mx-auto">
        <div className="form-group">
          {/* adding a drop-down menu to select a category */}
          <div className="form-group">
            {/* add in the onChange function so you can see what you selected */}
            <select value={category} className="form-control" onChange={ e => {
              return(
                setCategory(e.target.value)
              );
            }}>
              {/* map out all the options */}
              {
                categories.map( (item,i) => {
                  return(
                    //add a terinary operator to show the default selection
                    <option value={item} key={i}>{ item === '' ? '-----Select an Item----' : item}</option>
                  );
                })
              }
            </select>
          </div>


          <label>Amount of facts to display: </label>

          {/* create input text box form */}
          <input 
            className="form-control"
            type="text" 
            value={input} 

            // onChange is so we can see what we are typing
            onChange={ (e) => {
                return(
                  setInput(e.target.value)
                );
              }
            }
          />

          {/* adding submit button here */}
          <input type="submit" value="Submit" className="btn btn-primary" />


        </div>
      </form>     
      
    </div>
  );
}

export default App;


//notes
//list of public APIs https://github.com/public-apis/public-apis
//used Cat facts API https://alexwohlbruck.github.io/cat-facts/

//2 ways to get API data: fetch and axios
//fetch is a promise
