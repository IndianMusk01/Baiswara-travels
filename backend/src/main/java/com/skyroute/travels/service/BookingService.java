package com.skyroute.travels.service;

import com.skyroute.travels.model.Booking;
import com.skyroute.travels.model.Passenger;
import com.skyroute.travels.repository.BookingRepository;
import com.skyroute.travels.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class BookingService {
    @Autowired BookingRepository bookingRepository;
    @Autowired TripRepository tripRepository;

    @Transactional
    public Booking createBooking(Booking booking) {
        booking.setBookingReference(UUID.randomUUID().toString());
        booking.setBookingTime(LocalDateTime.now());
        booking.setStatus(Booking.BookingStatus.CONFIRMED);
        
        // Link passengers
        for(Passenger p : booking.getPassengers()) {
            p.setBooking(booking);
        }
        
        return bookingRepository.save(booking);
    }
}
