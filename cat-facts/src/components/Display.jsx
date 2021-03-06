//this will display the data of whatever item we chose from the dropdown menu
//it will be routed to from the submit button on the form
//whatever was submitted on the form will be passed in here as props so we can run the API query on that exact search term

import Axios from 'axios';//to access the API
import React, {useState, useEffect} from 'react';//since we want to make state variables AND so that when those props change, if we make another query, we want it to make that call again
import FactCard from './FactCard';//since the component is in the same folder/level as this component, we don't need to leading slash

const Display = props => {
    //set and initialize state variables
    const [facts, setFacts] = useState([]);

    //set up useEffect function
    useEffect( () => {
        //first argument will run the API load on page load
        //using backticks here because we are inserting
        Axios.get(`https://cat-fact.herokuapp.com/facts/random?animal_type=${props.category}&amount=${props.input}`)
            //update state variable to get the data for the specific item
            .then(res => setFacts(res.data))
            .catch(err => console.log(err))
    }, [props])//adding props in the dependency array allows for when the user selects a new item, it will re-run the query to the API to get the new data


    return (
        <div>
            <h2 className="text-center">{props.category.charAt(0) + props.category.slice(1)} Facts</h2>

            {/* lets map out the results by displaying the FactCard.jsx */}
            {
                facts.map( (this_fact, i) => {
                    return (<FactCard key={i} fact={this_fact}/>);
                })
            }

        </div>
    );
}

export default Display;

//notes
//API base URL: https://cat-fact.herokuapp.com
//since the example get URL looks like this:
//     /facts/random?animal_type=cat&amount=2

//then we want to use this URL:
// https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2
//and we will make variables out of
// https://cat-fact.herokuapp.com/facts/random?animal_type={cat}&amount={2}
