import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";//import bootstrap for styling

function App() {

  //function definition for button event below - using fetch
  const getCatFacts = () => {
    return(
      fetch("https://cat-fact.herokuapp.com/facts")
        //fetch doesn't return the data in an object so we actually need to return a JSON filetype
        //we need to do it in 2 steps, one to convert the data to JSON
        .then(res => res.json())
        //second to do something with the data, i.e. read it
        .then(res => console.log(res))
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
      
    </div>
  );
}

export default App;


//notes
//list of public APIs https://github.com/public-apis/public-apis
//used Cat facts API https://alexwohlbruck.github.io/cat-facts/

//2 ways to get API data: fetch and axios
//fetch is a promise
