import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./MOCK_DATA.json";
import Chart from "./charts";

function App() 
{
  const [search, setsearch] = useState("")
  return (
  <div className="App bg-dark p-5 ">
  <Chart/>
  <br/>
    <h3 className="text-white">SEARCH BY NAME,GENDER, EMAIL, PLACE</h3>
    <input className="form-control" placeholder="search by patient name" onChange={(e)=>setsearch(e.target.value)}/>
  <br/>

    <div className="container app ">
      {data.filter((val)=>{
        if(search == "")
        {
          //return every item in array
          return val;
        }
        else if(val.first_name.toLowerCase().includes(search.toLowerCase()))
        {
          return val;
        }
        else if(val.last_name.toLowerCase().includes(search.toLowerCase()))
        {
          return val;
        }
        else if(val.email.includes(search.toLowerCase()))
        {
          return val;
        }else if(val.blood_group.toLowerCase().includes(search.toLowerCase()))
        {
          return val;
        }else if(val.gender.toLowerCase().includes(search.toLowerCase()))
        {
          return val;
        }
        
       
      }).map((val,key)=>{
        return <div class="card">
        <img src={val.dp} alt="wrong URL" style={{width:"100%"}}/>
        <h3>
          {val.first_name}{val.last_name}
          <span class="badge badge-secondary">{val.blood_group}</span>         
        </h3>
        ({val.gender})
        <p class="title">{val.phone_no}</p>
        <p>{val.email}</p>
        <p>{val.from}</p>
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
