import React, { useState } from 'react';
import MadlibStory from './MadlibStory';

const Madlib = () => {
const ISTATE = {
    noun: "",
    adjective: "",
    color: ""
}
const [submitted, setSubmitted] = useState(false)
const [formData, setFormData] = useState(ISTATE)
const [valid, setValid] = useState(false)
const [error, setError] = useState(false)

const handleChange = (e) => {
    const { name, value } = e.target
    setFormData( formDatas => ({
        ...formDatas,
        [name]: value
    }) )

    checkValid();
}
const handleSubmit = (e) => {
    e.preventDefault()

    if(valid){
        setSubmitted(true)
    }else{
        setError(true)
    }
}
const newStory = () => {
    setFormData(ISTATE);
    setSubmitted(false)
    setError(false)
    setValid(false)
}

const checkValid = () => {
    if( formData.noun && formData.adjective && formData.color ){
        setValid(true)
        setError(false)
        console.log("set Valid is true")
    }else{
        console.log("currently not valid")
    }
}

if(!submitted){
    return(
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Madlibs!</label>
                    <input id="hello" type="text" name="noun" placeholder="Noun" value={formData.noun} onChange={handleChange}/>
                    <input type="text" name="adjective" placeholder="Adjective" value={formData.adjective} onChange={handleChange} />
                    <input type="text" name="color" placeholder="Color" value={formData.color} onChange={handleChange} />
                    <button>Get Story</button>
                    <p hidden={error? false:true }> Please fill all fields </p>
                </form>
            </div>
            )
}else{
    return(
        <MadlibStory noun={formData.noun} adjective={formData.adjective} color={formData.color} newStory={newStory} />
    )
}
}
export default Madlib;