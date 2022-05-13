import {React} from 'react'

const Manager = ({element}) => {
    return(
        <div>
            <h1>Manager</h1>
            <h1>{element.name}</h1>
            <img className='manager-images' src={element.image} />
            <h1>Fighters:</h1>
            {
                element.fighters.map((el) =>{
                    return (
                        <div>
                            <h2>{el.name}</h2>
                            <img className='images' src={el.image} />

                        </div>

                    )
                })
            }

        </div>
    )
}
export default Manager