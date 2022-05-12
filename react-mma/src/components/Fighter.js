import {React, useState} from 'react'

const Fighter = ({element,setFighters}) => {
    
    const deleteFighter = async () => {
       let req = await fetch(`http://localhost:9292/${element.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
        if (req.ok){ 
            setFighters((prevState)=>{
            let deletedFighter = prevState.filter((elemente)=>{
            return elemente.id!==element.id
            })
            return deletedFighter
        })

        }
    }
    return(
        <div>
            <h1>{element.name}</h1>
            <img src={element.image}/>
            <h3>{element.weightclass}</h3>
            <h3>Height: {element.height}in. Reach: {element.reach}in.</h3>
            <h3>Record: {element.wins}-{element.losses}-{element.draws}</h3>
            <button onClick={deleteFighter}>Remove Fighter</button>
        </div>
    )
}
export default Fighter