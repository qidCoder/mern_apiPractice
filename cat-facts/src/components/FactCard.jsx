//this component will display all the things we want on our cat card

import React from 'react';

const FactCard = props => {
    //destructure props
    const {fact} = props;

    return (
        <div className="card col-12 dog">
            <div className="card-body">
                {/* the .text is one of the key names in the API array */}
                <h2 className="card-title">{fact.text}</h2>

                {/*The error is that the API has a single instance without a user - so the terinary operator will take care of it by checking for a user*/}
                {/* adding a nested terinary operator to cover an errors now that we have a list of other animal facts */}
                <h6 className="card-subtitle text-muted my-3">Posted by: 
                    {fact.user ? 
                        fact.user.name ?
                            fact.user.name.first +" "+ fact.user.name.last
                            :
                            'Anonymous'
                        : 
                        "Anonymous"
                    }
                </h6>
            </div>
        </div>
    );
}

export default FactCard;