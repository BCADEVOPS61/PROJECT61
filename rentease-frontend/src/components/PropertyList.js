import React, { useEffect, useState } from "react";
import PropertyService from "../services/PropertyService";

function PropertyList({ refresh }) {
  const [properties, setProperties] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedProperty, setEditedProperty] = useState({});

  useEffect(() => {
    loadProperties();
  }, [refresh]);

  const loadProperties = () => {
    PropertyService.getAllProperties()
      .then((res) => {
        setProperties(res.data || []);
      })
      .catch((err) => {
        console.error("Failed to load properties:", err);
        alert("Error loading properties. Please try again.");
      });
  };

  const deleteProperty = (id) => {
    if (window.confirm("Are you sure?")) {
      PropertyService.deleteProperty(id)
        .then(() => {
          alert("Property deleted successfully!");
          loadProperties();
        })
        .catch((err) => {
          console.error("Error deleting property:", err);
          alert("Error deleting property. Please try again.");
        });
    }
  };

  const startEdit = (property) => {
    setEditingId(property.id);
    setEditedProperty({ ...property });
  };

  const saveEdit = (id) => {
    PropertyService.updateProperty(id, editedProperty)
      .then(() => {
        setEditingId(null);
        alert("Property updated successfully!");
        loadProperties();
      })
      .catch((err) => {
        console.error("Error updating property:", err);
        alert("Error updating property. Please try again.");
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
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {properties.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>

              <td>
                {editingId === p.id ? (
                  <input
                    value={editedProperty.propertyName}
                    onChange={(e) =>
                      setEditedProperty({
                        ...editedProperty,
                        propertyName: e.target.value,
                      })
                    }
                  />
                ) : (
                  p.propertyName
                )}
              </td>

              <td>
                {editingId === p.id ? (
                  <input
                    value={editedProperty.ownerName}
                    onChange={(e) =>
                      setEditedProperty({
                        ...editedProperty,
                        ownerName: e.target.value,
                      })
                    }
                  />
                ) : (
                  p.ownerName
                )}
              </td>

              <td>
                {editingId === p.id ? (
                  <input
                    value={editedProperty.location}
                    onChange={(e) =>
                      setEditedProperty({
                        ...editedProperty,
                        location: e.target.value,
                      })
                    }
                  />
                ) : (
                  p.location
                )}
              </td>

              <td>
                {editingId === p.id ? (
                  <input
                    type="number"
                    value={editedProperty.rentAmount}
                    onChange={(e) =>
                      setEditedProperty({
                        ...editedProperty,
                        rentAmount: e.target.value,
                      })
                    }
                  />
                ) : (
                  p.rentAmount
                )}
              </td>

              <td>
                {editingId === p.id ? (
                  <input
                    value={editedProperty.status}
                    onChange={(e) =>
                      setEditedProperty({
                        ...editedProperty,
                        status: e.target.value,
                      })
                    }
                  />
                ) : (
                  p.status
                )}
              </td>

              <td>
                {editingId === p.id ? (
                  <button onClick={() => saveEdit(p.id)}>Save</button>
                ) : (
                  <button onClick={() => startEdit(p)}>Edit</button>
                )}
                &nbsp;
                <button onClick={() => deleteProperty(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropertyList;
