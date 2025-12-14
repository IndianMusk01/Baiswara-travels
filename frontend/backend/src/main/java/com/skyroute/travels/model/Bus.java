package com.skyroute.travels.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "buses")
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String code; // e.g., "SKY-101"
    private int capacity; // Total seats
    private String type; // e.g., "AC Sleeper", "Non-AC Seater"
    private String operatorName; // e.g., "SkyRoute Prime"
}
