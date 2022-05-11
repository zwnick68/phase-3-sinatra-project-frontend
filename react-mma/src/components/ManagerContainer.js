import {React, useEffect, useState} from 'react'
import Manager from './Manager.js'
const ManagerContainer = () => {
    let [managers, setManagers] = useState([])
    useEffect(() => {
        (async() => {
        let req = await fetch ('http://localhost:9292/managers')
        let res = await req.json()
        setManagers(res.managers)
    })()
    }, [])
    console.log(managers)

    return (
        <div>
            {managers.map((element) => {
                return(
                    <Manager element={element} />
                )
            })}
        </div>
    )}
export default ManagerContainer