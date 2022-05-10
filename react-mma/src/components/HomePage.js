import React, { useEffect } from 'react'
import { useState, UseEffect } from 'react'
import FighterContainer from './FighterContainer'
import { Routes, Route } from "react-router-dom";


const HomePage = () => {
    let [data, setData] = useState([])
    useEffect(() => {
     (async() => {
         let req = await fetch('http://localhost:9292')
         let res = req.json()
         setData(res)
     })()   
    }, [])
    console.log(data)
    return (
        <div>
        <Routes>
            <Route path= '/'> 
                <FighterContainer/>
            </Route>
        </Routes>
        </div>
    )

}



export default HomePage