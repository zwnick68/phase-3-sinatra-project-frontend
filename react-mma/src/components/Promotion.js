import {React} from 'react'

const Promotion = ({element}) => {
    return(
        <div>
            <img className='promotion-images' src={element.image} />
            {
                element.fighters.map((el) => {
                    return (
                        <div>
                            <h2>{el.name}</h2>
                            <h3>{el.weightclass}</h3>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default Promotion