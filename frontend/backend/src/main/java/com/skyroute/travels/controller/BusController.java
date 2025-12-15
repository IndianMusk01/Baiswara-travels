package com.skyroute.travels.controller;

import com.skyroute.travels.model.Trip;
import com.skyroute.travels.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/buses")
public class BusController {
    @Autowired
    TripRepository tripRepository;

    @GetMapping("/search")
    public ResponseEntity<List<Trip>> searchBuses(
            @RequestParam String source,
            @RequestParam String destination,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        
        LocalDateTime start = date.atStartOfDay();
        LocalDateTime end = date.atTime(LocalTime.MAX);
        
        List<Trip> trips = tripRepository.findTrips(source, destination, start, end);
        return ResponseEntity.ok(trips);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Trip> getTrip(@PathVariable Long id) {
        return tripRepository.findById(id) .map(ResponseEntity::ok) .orElse(ResponseEntity.notFound().build());
    }
}
