package com.skyroute.travels.repository;

import com.skyroute.travels.model.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface TripRepository extends JpaRepository<Trip, Long> {
    
    @Query("SELECT t FROM Trip t WHERE t.sourceCity = :source AND t.destinationCity = :dest AND t.departureTime >= :startTime AND t.departureTime < :endTime")
    List<Trip> findTrips(String source, String dest, LocalDateTime startTime, LocalDateTime endTime);
}
