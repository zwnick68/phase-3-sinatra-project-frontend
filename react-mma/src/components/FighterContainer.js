import {React, useState, useEffect} from 'react'
import Fighter from './Fighter.js'
const FighterContainer = () => {
    const [fighters, setFighters] = useState([])
    useEffect(() => {
        (async() => {
            let req = await fetch('http://localhost:9292')
            let res = await req.json()
            setFighters(res.Fighters)
        })()   
       }, [])
       console.log(fighters)
    return (
        <div>
            {fighters.map((element) => {
                return(
                    <Fighter element={element} />
                )
            })}
        </div>
    )}
export default FighterContainer