import React from 'react';


const MadlibStory = (props) => {

return(
    <div class="MadlibStory">
        <h1 >Madlib Story: </h1>
        <p>
            {` The ${props.noun} was ${props.adjective} and ${props.color} `}
        </p>
        <button onClick={props.newStory}>New Story</button>
    </div>
)

}


export default MadlibStory;