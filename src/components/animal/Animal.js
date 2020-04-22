import React from "react"

export default ({animal, location, customer}) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        {/* <div className="animal__location">{location.name}</div>
        <div className="animal__owner">{customer.name}</div> */}
    </section>
)