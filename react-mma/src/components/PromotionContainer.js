import {React, useState, useEffect} from 'react'
import Promotion from './Promotion.js'
const PromotionContainer = () => {
    let [promotion, setPromotion] = useState([])
    useEffect(() => {
        (async() => {
        let req = await fetch ('http://localhost:9292/promotions')
        let res = await req.json()
        setPromotion(res.promotions)
    })()
    }, [])

    console.log(promotion)
    return (
        <div>
            
                
        </div>
    )}
export default PromotionContainer