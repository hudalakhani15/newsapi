import { Card, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "be357651ba984a3fbcc7c43a698ee87e"


function Data(){


    const[data,setData] = useState([])


    const getNews = ()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=64cff2d0f3f64f4db3bcb2a4e1910698").
        then((success)=>{
            console.log(success.data.articles)
            setData(success.data.articles)
        
        }).catch((err)=>{
            console.log(err);
        })
       }
    //    console.log(arr)
    
    
       useEffect(()=>{
        getNews()
       },[])


    let navigate = useNavigate()
    function moveData(value){
        navigate("/item",{
            state:value
        })
    }
   
    
                return(<>
                    <div className='container my-3'>
                    <button className='btn btn-primary' onClick={getNews()}>Fetch News</button></div>
                  <div className='container'>
                    <div className='row'>
                    {
                        data.map((value)=>{
                          return(
              <div className='col'>
                         <div className="card" style={{width: "18rem"}} >
                           <img src={value.urlToImage} className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title">{value.title}</h5>
                              <p className="card-text">{value.description}</p>
                               <a  onClick={()=>moveData(value)} className="btn btn-primary">Read More</a>
                            </div>
                         </div>
                       </div>
                          );
                        })
       
       }
         </div>
    </div>
  </>
    )
  
}


export default Data;