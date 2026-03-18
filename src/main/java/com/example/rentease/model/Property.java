package com.example.rentease.model;

import jakarta.persistence.*;

@Entity
@Table(name = "PROPERTY")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "PROPERTY_NAME")
    private String propertyName;

    @Column(name = "OWNER_NAME")
    private String ownerName;

    @Column(name = "LOCATION")
    private String location;

    @Column(name = "RENT_AMOUNT")
    private double rentAmount;

    @Column(name = "STATUS")
    private String status;

    // Default constructor
    public Property() {
    }

    // Getter & Setter for ID (IMPORTANT for UPDATE)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPropertyName() {
        return propertyName;
    }

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public double getRentAmount() {
        return rentAmount;
    }

    public void setRentAmount(double rentAmount) {
        this.rentAmount = rentAmount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    // Optional but very useful for debugging
    @Override
    public String toString() {
        return "Property{" +
                "id=" + id +
                ", propertyName='" + propertyName + '\'' +
                ", ownerName='" + ownerName + '\'' +
                ", location='" + location + '\'' +
                ", rentAmount=" + rentAmount +
                ", status='" + status + '\'' +
                '}';
    }
}
