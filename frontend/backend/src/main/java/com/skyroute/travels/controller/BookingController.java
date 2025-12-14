package com.skyroute.travels.controller;

import com.skyroute.travels.model.Booking;
import com.skyroute.travels.model.User;
import com.skyroute.travels.repository.BookingRepository;
import com.skyroute.travels.repository.UserRepository;
import com.skyroute.travels.repository.TripRepository;
import com.skyroute.travels.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/bookings")
public class BookingController {
    @Autowired BookingService bookingService;
    @Autowired BookingRepository bookingRepository;
    @Autowired UserRepository userRepository;

    @PostMapping
    public ResponseEntity<?> createBooking(@RequestBody Booking bookingRequest, @AuthenticationPrincipal UserDetails userDetails) {
        try {
            User user = userRepository.findByUsername(userDetails.getUsername()).orElseThrow();
            bookingRequest.setUser(user);
            Booking newBooking = bookingService.createBooking(bookingRequest);
            return ResponseEntity.ok(newBooking);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Booking Failed: " + e.getMessage());
        }
    }

    @GetMapping("/my-bookings")
    public ResponseEntity<List<Booking>> getUserBookings(@AuthenticationPrincipal UserDetails userDetails) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElseThrow();
        List<Booking> bookings = bookingRepository.findByUser(user);
        return ResponseEntity.ok(bookings);
    }
}
