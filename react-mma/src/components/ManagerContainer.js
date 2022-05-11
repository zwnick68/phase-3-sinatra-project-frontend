import {React, useState} from 'react'
import Manager from './Manager.js'
const ManagerContainer = () => {
    let [managers, setManagers] = useState([])
    const request = async () => {
        let req = await fetch ('http://localhost:9292')
        let res = await req.json()
        setManagers(res)
    }
request()
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