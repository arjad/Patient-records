import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./MOCK_DATA.json";

function App() 
{
  return (
  <div className="App">
  <br/>
    app
    <input placeholder="search nay patient name"/>
  <br/>

    <div className="container app bg-light">
      {data.map((val,key)=>{
        return <div class="card">
        <img src={val.dp} alt="image" style={{width:"100%"}}/>
        <h3>{val.first_name}{val.last_name}<span class="badge badge-secondary">{val.blood_group}</span>         </h3>
        ({val.gender})
        <p class="title">{val.phone_no}</p>
        <p>{val.email}</p>
        <p>{val.from}</p>
        <p>Harvard University</p>
        <div style={{margin: `24px 0`}}>
          <a href="#"><i class="fa fa-dribbble"></i></a> 
          <a href="#"><i class="fa fa-twitter"></i></a>  
          <a href="#"><i class="fa fa-linkedin"></i></a>  
          <a href="#"><i class="fa fa-facebook"></i></a> 
        </div>
      </div>
      })}
    </div>
    
  </div>
  );
}

export default App;
