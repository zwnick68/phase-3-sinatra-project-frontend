import {React} from 'react'

const Promotion = ({element}) => {
    return(
        <div>
            <h1>{element.name}</h1>
            <img src={element.image} />
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