import React, {useState, useEffect} from "react";

const axios = require('axios');


function Display(props){
    const [dataState, setDataState] = useState("Data");

    useEffect(() =>{
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
        .then((response) => {
            console.log("data:", response.data);
            const data = response.data;
            setDataState(data.url);
        })
    }, [])

    
    return (

        <div>
            <img className="photoNasa" src={dataState}></img>
        </div>
    );
}

export default Display;

