import {React, useState, useEffect} from 'react'
import Fighter from './Fighter.js'
const FighterContainer = () => {
    const [fighters, setFighters] = useState([])
    const [form, setForm] = useState({
        name: '',
        height: '',
        reach: '',
        weightclass: '',
        wins: 0,
        losses: 0,
        draws: 0,
        image: ''
    })
    const [submitModalVisible, setSubmitModalVisible] = useState(false)
    const toggleSubmit = () => {
        setSubmitModalVisible(!submitModalVisible)
    }
    useEffect(() => {
        (async() => {
            let req = await fetch('http://localhost:9292/fighters')
            let res = await req.json()
            setFighters(res.Fighters)
        })()   
       }, [])
       console.log(fighters)
    return (
        <div className="container-div">
            {fighters.map((element) => {
                return(
                    <Fighter fighters={fighters} setFighters={setFighters} element={element} />
                )
            })}
            <h1>ADD A FIGHTER</h1>
            {
                submitModalVisible ?  <form className="form" onSubmit={async(e)=> {
                    e.preventDefault()
                    let req = await fetch('http://localhost:9292/fighters', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(form)
                        //     {
                        //     name: form.name,
                        //     height: form.height,
                        //     reach: form.reach,
                        //     weightclass: form.weightclass,
                        //     image: form.image
                        // })
                    })
                    // let res = await req.json()
                    // setFighters((prevState) => [...prevState, res] )
                }}>
                    <div>
                    <video className="background-video" autoPlay muted loop poster=''>
                        <source src="../champion.mp4" type="video/mp4"></source>
                    </video>
                        <input className="input" type="text" name="name" placeholder="Name" onChange={(e)=>{setForm({...form, name: e.target.value})}}/>
                        <input className="input" type="text" name="height" placeholder="Height" onChange={(e)=>{setForm({...form, height: e.target.value})}}/>
                        <input className="input" type="text" name="reach" placeholder="Reach" onChange={(e)=>{setForm({...form, reach: e.target.value})}}/>
                        <input className="input" type="text" name="weightclass" placeholder="Weightclass" onChange={(e)=>{setForm({...form, weightclass: e.target.value})}}/>
                        {/* <div>
                            <input type="text" name="wins" placeholder="Wins" onChange={(e)=>{setForm({...form, wins: e.target.value})}}/> 
                            <input type="text" name="losses" placeholder="Losses" onChange={(e)=>{setForm({...form, losses: e.target.value})}}/> 
                            <input type="text" name="draws" placeholder="Draws" onChange={(e)=>{setForm({...form, draws: e.target.value})}}/>
                        </div> */}
                        <input className="input" type="text" name="image" placeholder="Image Link" onChange={(e)=>{setForm({...form, image: e.target.value})}}/>
                    </div>                    
                    <button className="button" type="submit">UPLOAD</button>
                    <button className="button" type="button" onClick={toggleSubmit}>BACK</button>
                    
                </form> : <button className="button" onClick={toggleSubmit}>ADD</button>
            }
        </div>
    )}
export default FighterContainer