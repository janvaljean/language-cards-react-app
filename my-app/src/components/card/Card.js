import React from 'react'
import {languages} from "../../helper/data";
import "./Card.css";


const Card = () => {
    
    
  return (
    <div>
        <div className="container">
            <div className="row">
                {languages.map((item, index) => {
                return(
                    <div className="col-6">
                        <div className="card">
                            <img src={item.img} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {item.name}
                                </h5>
                            </div>
                        </div>
                    </div>
                     )})}

                
            </div>
        </div>
    </div>
  )
}

export default Card
