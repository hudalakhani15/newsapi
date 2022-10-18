import { Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";


function Item(){
    const location = useLocation()
    return(
<>
        {/* <div className='container my-3'>
        <button className='btn btn-primary' onClick={getNews()}>Fetch News</button></div> */}
      <div className='container' style={{justifyContent: "center"}}>
        <div className='row'>
    
  <div className='col'>
             <div className="card" style={{width: "35rem" , height : "150px" , }} >
               <img src={location.state.urlToImage} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{location.state.title}</h5>
                  <p className="card-text">{location.state.description}</p>
                  <Typography className="fw-bold"  variant="h6">Title : {location.state.title}</Typography>
                              <Typography className="fw-bold"  variant="h6">Description : {location.state.description}</Typography>
                              <Typography className="fw-bold"  variant="h6">URL : {location.state.url}</Typography>
                </div>
             </div>
           </div>
          
          


</div>
</div>
</>
    )
}


export default Item;