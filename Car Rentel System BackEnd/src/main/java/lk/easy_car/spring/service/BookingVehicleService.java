package lk.easy_car.spring.service;

import lk.easy_car.spring.dto.BookingDTO;

import java.util.ArrayList;

public interface BookingVehicleService {
    void comformBooking(BookingDTO dto);

    void deleteBooking(String id);

    ArrayList<BookingDTO> getAllBooking();
}
