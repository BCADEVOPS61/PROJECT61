import React, { useEffect, useState } from "react";
import propertyService from "../services/PropertyService";

function PropertyList() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = () => {
    propertyService.getAllProperties()
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>

      <h2>Property List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Property Name</th>
            <th>Owner</th>
            <th>Location</th>
            <th>Rent</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {properties.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.owner}</td>
              <td>{p.location}</td>
              <td>{p.rent}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default PropertyList;
