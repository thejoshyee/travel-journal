import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import data from "./data"

export default function App(props) {
    const cards = data.reverse().map(item =>  {
        return (
            
            <Card 
                key={item.id}
                {...item}
                
            />
        )
    })
        
    return (
        <div className="app-container">
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}