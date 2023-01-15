import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Skillsdetails() {
    const param = useParams()
    const techID = param.identifier
    const [techs, setTechs] = useState([])
    const [tech, setTech] = useState(null)
    useEffect(() => {
        axios.get('https://devmastery-assets.vercel.app/technologies.json')
            .then(res => setTechs(res.data))
            .catch(err => console.log(err.message))
    }, [])
    useEffect(() => {
        if (techs.length > 0) {
            const techSearch = techs.find(item => item.id === techID)
            setTech(techSearch)
        }

    }, [techs])


    return (
        <div>
            {tech ? (
                <div style={{textAlign:'center'}}>
                    <p className="mt-2 fs-1">{tech.name}</p>
                    <img className="mt-2" src={tech.image} alt="tech" style={{width:200}}/>
                    <p className="mt-2 fs-5">{tech.description}</p>
                </div>
            ) : <h2>Tech not found</h2>
            }
        </div>

    )
}

export default Skillsdetails
