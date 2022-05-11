import {React, useState} from 'react'
import Promotion from './Promotion.js'
const PromotionContainer = () => {
    let [promotion, setPromotion] = useState([])
    useEffect(() => {
        (async() => {
        let req = await fetch ('http://localhost:9292/promotions')
        let res = await req.json()
        setPromotion(res)
    })()
    }, [])
    return (
        <div>
            {promotion.map((element) => {
                return(
                    <Promotion element={element} />
                )
            })}
        </div>
    )}
export default PromotionContainer