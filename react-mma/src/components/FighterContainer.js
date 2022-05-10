import {React, useState} from 'react'
import Fighter from './Fighter.js'
const FighterContainer = () => {
    let [fighters, setFighters] = useState([])
    const request = async () => {
        let req = await fetch ('http://localhost:9292')
        let res = await req.json()
        setFighters(res)
    }
request()
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