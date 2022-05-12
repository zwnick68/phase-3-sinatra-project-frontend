import {React, useState} from 'react'

const Fighter = ({element,setFighters}) => {
    const [fighterUpdate, setFighterUpdate] = useState({
        name: '',
        height: 0,
        reach: 0,
        weightclass: '',
        wins: 0,
        losses: 0,
        draws: 0,
        image: ''


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
            <h3>Height: {element.height}in. Reach: {element.reach}in.</h3>
            <h3>Record: {element.wins}-{element.losses}-{element.draws}</h3>
            <button onClick={deleteFighter}>Remove Fighter</button>
            {
                updateModalVisible ? <form className="form" onSubmit={async(e)=>{
                    e.preventDefault()
                    let req = await fetch(`http://localhost:9292/fighters/${element.id}`, {
                        method: 'PATCH',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(fighterUpdate)
                    })
                    let res = req.json()
                    setFighterUpdate((prevState) => [...prevState, res])
                    setFighters((prevState) => [...prevState, res])
                    toggleUpdate()
                }}>
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
                            <button type="submit">UPDATE</button>
                            <button type="button" onClick={toggleUpdate}>BACK</button>

                        </div>  
                        
                    </div>
                
                </form> : <button onClick={toggleUpdate((e)=> {
                    e.preventDefault()
                }
                )}>UPDATE STATS</button>
            }

            
        </div>
    )
}
export default Fighter