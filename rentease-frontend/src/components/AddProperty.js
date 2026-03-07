import React, { useState } from "react";
import propertyService from "../services/PropertyService";

function AddProperty() {

  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [location, setLocation] = useState("");
  const [rent, setRent] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const property = {
      name: name,
      owner: owner,
      location: location,
      rent: rent,
      status: status
    };

    propertyService.addProperty(property)
      .then(() => {
        alert("Property Added Successfully");
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Add Property</h2>

      <form onSubmit={onSubmit}>

        <input
          type="text"
          placeholder="Property Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />

        <input
          type="text"
          placeholder="Owner"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        /><br />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        /><br />

        <input
          type="number"
          placeholder="Rent"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
        /><br />

        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        /><br />

        <button type="submit">Add</button>

      </form>
    </div>
  );
}

export default AddProperty;
