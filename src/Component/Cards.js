import React,{useState} from "react";
import "./Cards.css";
import "./ProductsInfo";

function Cards (props)
{
    return (
                <div className="Grid-Item">
            <a href=""><img src={props.image} /> </a>
            <div className="Name">
            <a className="Product" href="/">{props.Name}</a>
            </div>
            <div className="Price">
                <h3>{props.Price}</h3>
            </div>
            <div className="Reviews">
                <p>{props.Reviews}</p> 
            </div>
            <div>
                <button classname="btn">Add to cart</button>
            </div>
            </div>
       
    );
}

export default Cards;