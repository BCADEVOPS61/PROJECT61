package com.example.rentease.controller;

import com.example.rentease.model.Property;
import com.example.rentease.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/properties")
public class PropertyController {

    @Autowired
    private PropertyRepository propertyRepository;

    // 🔹 CREATE property
    @PostMapping
    public Property addProperty(@RequestBody Property property) {
        return propertyRepository.save(property);
    }

    // 🔹 READ all properties
    @GetMapping
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    // 🔹 READ property by ID
    @GetMapping("/{id}")
    public Property getPropertyById(@PathVariable Long id) {
        return propertyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Property not found"));
    }

    // 🔹 UPDATE property
    @PutMapping("/{id}")
    public Property updateProperty(
            @PathVariable Long id,
            @RequestBody Property property) {

        Property existingProperty = propertyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Property not found"));

        existingProperty.setPropertyName(property.getPropertyName());
        existingProperty.setOwnerName(property.getOwnerName());
        existingProperty.setLocation(property.getLocation());
        existingProperty.setRentAmount(property.getRentAmount());
        existingProperty.setStatus(property.getStatus());

        return propertyRepository.save(existingProperty);
    }

    // 🔹 DELETE property
    @DeleteMapping("/{id}")
    public void deleteProperty(@PathVariable Long id) {
        propertyRepository.deleteById(id);
    }
}
