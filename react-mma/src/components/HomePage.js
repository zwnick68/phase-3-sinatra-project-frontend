import React, { useEffect } from 'react'
import { useState, UseEffect } from 'react'


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
}



export default HomePage