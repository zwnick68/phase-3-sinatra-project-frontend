import {React, useState} from 'react'

const Fighter = ({element}) => {
    return(
        <div>
            <h1>{element.name}</h1>
            <img src={element.image}/>
            <h3>{element.weightclass}</h3>
            <h3>Height: {element.height}in. Weight: {element.reach}in.</h3>
            <h3>Record: {element.wins}-{element.losses}-{element.draws}</h3>

        </div>
    )
}
export default Fighter