//this component will display all the things we want on our cat card

import React from 'react';

const CatCard = props => {
    //destructure props
    const {fact} = props;

    return (
        <div className="card col-2">
            <div className="card-body">
                {/* the .text is one of the key names in the API array */}
                <h2 className="card-title">{fact.text}</h2>
                {/* commenting out this user for now since it is throwing an error. The error is that the API has a single instance without a user */}
                {/* <h6 className="card-subtitle text-muted my-3">Posted by: {fact.user.name.first} {fact.user.name.last}</h6> */}
            </div>
        </div>
    );
}

export default CatCard;