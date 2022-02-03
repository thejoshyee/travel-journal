import React from "react"

export default function Card(props) {
    return (
        <div className="page--container">
            <div className="card--wrapper">
                <div className="image--wrapper">
                    <img src={props.imageUrl} className="card--image" />
                </div>
                
                <div className="card--post">
                    <div className="post--top">
                        <div className="location--logo">
                            <i className="fas fa-map-marker-alt"></i>
                            <p className="location--name">{props.location}</p> 
                        </div>
                        <a className="card--map" href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <div className="post--bottom">
                        <p className="post--title">{props.title}</p>
                        <p className="post--date">{props.startDate} - {props.endDate}</p>
                        <p className="post--description">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    ) 
}