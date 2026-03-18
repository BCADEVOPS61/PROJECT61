package com.example.rentease.service;

import com.example.rentease.model.Property;
import com.example.rentease.repository.PropertyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyService {

    private final PropertyRepository propertyRepository;

    public PropertyService(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    public Property addProperty(Property property) {
        return propertyRepository.save(property);
    }

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public Property updateProperty(Long id, Property updatedProperty) {
        return propertyRepository.findById(id)
                .map(property -> {
                    property.setPropertyName(updatedProperty.getPropertyName());
                    property.setOwnerName(updatedProperty.getOwnerName());
                    property.setLocation(updatedProperty.getLocation());
                    property.setRentAmount(updatedProperty.getRentAmount());
                    property.setStatus(updatedProperty.getStatus());
                    return propertyRepository.save(property);
                })
                .orElseThrow(() -> new RuntimeException("Property not found with id " + id));
    }

    public void deleteProperty(Long id) {
        propertyRepository.deleteById(id);
    }
}
