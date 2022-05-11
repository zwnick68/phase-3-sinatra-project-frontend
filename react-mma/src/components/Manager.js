import {React,useState} from 'react'

const Manager = ({element}) => {
    return(
        <div>
            <h1>{element.name}</h1>
            <img src={element.image} />
            <h1>Fighters:</h1>
            {
                element.fighters.map((el) =>{
                    return (
                        <div>
                            <h2>{el.name}</h2>
                            <img src={el.image} />

                        </div>

                    )
                })
            }

        </div>
    )
}
export default Manager