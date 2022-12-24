import React from "react";

function Card(props){
    console.log(props)
    return (
        <div className="destination-card">
            <img src={props.item.imageUrl} alt={props.item.title} className="destination-img" />
            <section className="card-content">
            <section className="destination-location">
            <img src="../public/assets/location.png" alt="" className="location-logo"/>
            <p className="location">{props.item.location}</p>
            </section>
            <h1 className="card-heading">{props.item.title}</h1>
            <p className="card-dates">{props.item.startDate + " - "+props.item.endDate}</p>
            <p className="destination-desc">{props.item.description}</p>
            </section>
        </div>
    )
}

export default Card;