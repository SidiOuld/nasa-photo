import React, { useState, useEffect } from "react";
import styled from "styled-components";

const axios = require("axios");

const Container = styled.div``;

function Display(props) {
  const [dataState, setDataState] = useState("Data");
  const [date, setDate] = useState({ date: "2012-03-14" });

  useEffect(() => {
    axios
      .get(
        // "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14"
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date.date}`
      )
      .then(response => {
        console.log("data:", response.data);
        const data = response.data;
        setDataState(data);
      });
  }, [date]);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(date);

    setDate({
      ...date,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={date.date}
          onChange={handleChange}
        />
      </form>

      <div>
        <h2>{dataState.title}</h2>
        <img className="photoNasa" src={dataState.url}></img>
      </div>
    </Container>
  );
}

export default Display;
