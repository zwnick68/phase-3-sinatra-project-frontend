import {React, useState} from 'react'

const Fighter = ({element,setFighters}) => {
    const [fighterUpdate, setFighterUpdate] = useState({
        name: element.name,
        height: element.height,
        reach: element.reach,
        weightclass: element.weightclass,
        wins: element.wins,
        losses: element.losses,
        draws: element.draws,
        image: element.image


    })
    const [updateModalVisible, setUpdateModalVisible] = useState(false)
    
    const toggleUpdate = () => {
        setUpdateModalVisible(!updateModalVisible)
    }
    
    const deleteFighter = async () => {
       let req = await fetch(`http://localhost:9292/fighters/${element.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
        if (req.ok){ 
            setFighters((prevState)=>{
            let deletedFighter = prevState.filter((elemente)=>{
            return elemente.id!==element.id
            })
            return deletedFighter
        })

        }
    }
    return(
        <div>
            <h1>{element.name}</h1>
            <img className='images' src={element.image}/>
            <h3>{element.weightclass}</h3>
            <h3>Height: {element.height} in. Reach: {element.reach} in.</h3>
            <h3>Record: {element.wins}-{element.losses}-{element.draws}</h3>
            <button className="button" onClick={deleteFighter}>Remove Fighter</button>
            {
                updateModalVisible ? 
                    <div className="form-div">
                        <video className="background-video" autoPlay muted loop poster=''>
                            <source src="../Weigh-in.mp4" type="video/mp4"></source>
                        </video>
                        <input className="input" type="text" name="name" placeholder="name" onChange={(e)=>{setFighterUpdate({...fighterUpdate, name: e.target.value})}}/> 
                        <input className="input" type="text" name="height" placeholder="height" onChange={(e)=>{setFighterUpdate({...fighterUpdate, height: e.target.value})}}/>
                        <input className="input" type="text" name="reach" placeholder="reach" onChange={(e)=>{setFighterUpdate({...fighterUpdate, reach: e.target.value})}}/>
                        <input className="input" type="text" name="weightclass" placeholder="weightclass" onChange={(e)=>{setFighterUpdate({...fighterUpdate, weightclass: e.target.value})}}/>
                    
                        <input className="input" type="text" name="wins" placeholder="wins" onChange={(e)=>{setFighterUpdate({...fighterUpdate, wins: e.target.value})}}/>
        
                        <input className="input" type="text" name="losses" placeholder="losses" onChange={(e)=>{setFighterUpdate({...fighterUpdate, losses: e.target.value})}}/>
        
                        <input className="input" type="text" name="draws" placeholder="draws" onChange={(e)=> {setFighterUpdate({...fighterUpdate, draws: e.target.value})}}/>
        
                        <input className="input" type="text" name="image" placeholder="new image" onChange={(e)=>{setFighterUpdate({...fighterUpdate, image: e.target.value})}}/>
                        <div className="bttn-div">
                            <button className='button' onClick={async()=>{
                    
                                let req = await fetch(`http://localhost:9292/fighters/${element.id}`, {
                                    method: 'PATCH',
                                    headers: {'Content-Type': 'application/json'},
                                    body: JSON.stringify(fighterUpdate)
                                })
                                let res = req.json()
                                setFighterUpdate(res)
                                // setFighters((prevState) => [...prevState, res])
                                toggleUpdate()
                            }}>UPDATE</button>
                            <button className="button" type="button" onClick={toggleUpdate}>BACK</button>

                        </div>  
                        
                    </div> : <button className="button" onClick={toggleUpdate}>UPDATE STATS</button>
            }

            
        </div>
    )
}
export default Fighter