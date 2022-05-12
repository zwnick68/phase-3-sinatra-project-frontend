import React, { useEffect } from 'react'
import { useState } from 'react'
import FighterContainer from './FighterContainer'
import ManagerContainer from './ManagerContainer';
import PromotionContainer from './PromotionContainer';
import NavBar from './NavBar'
import { Switch, Route } from "react-router-dom";


const HomePage = () => {
    // const [data, setData] = useState([])
    let [page, setPage] = useState('/')
    // useEffect(() => {
    //  (async() => {
    //      let req = await fetch('http://localhost:9292/')
    //      let res = req.json()
    //      setData(res)
    //  })()   
    // }, [])
    // console.log(data)
    return (
        <div>
        <NavBar onPageChange={setPage}/>
        <Switch>
            <Route  exact path= '/'> 
                <FighterContainer />
            </Route>
            <Route path= '/managers'>
                <ManagerContainer/>
            </Route>
            <Route path= '/promotions'>
                <PromotionContainer/>
            </Route>
        </Switch>
        </div>
    )

}



export default HomePage