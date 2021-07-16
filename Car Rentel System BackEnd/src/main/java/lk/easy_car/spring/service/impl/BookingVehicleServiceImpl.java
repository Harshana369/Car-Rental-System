package lk.easy_car.spring.service.impl;

import lk.easy_car.spring.dto.BookingDTO;
import lk.easy_car.spring.entity.Booking;
import lk.easy_car.spring.exception.ValidateException;
import lk.easy_car.spring.repo.BookingDetailRepo;
import lk.easy_car.spring.repo.BookingRepo;
import lk.easy_car.spring.service.BookingVehicleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;


@Service
@Transactional
public class BookingVehicleServiceImpl implements BookingVehicleService {

    @Autowired
    private BookingRepo bookingRepo;

    @Autowired
    private BookingDetailRepo bookingDetailRepo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void comformBooking(BookingDTO dto) {
        if (bookingRepo.existsById(dto.getBookingid())) {
            throw new ValidateException("Booking Already Exist");
        }
        Booking booking = mapper.map(dto,Booking.class);
        bookingRepo.save(booking);

    }

    @Override
    public void deleteBooking(String id) {
        if (!bookingRepo.existsById(id)) {
            throw new ValidateException("No Booking for Delete..!");
        }
        bookingRepo.deleteById(id);
    }

    @Override
    public ArrayList<BookingDTO> getAllBooking() {
        List<Booking> all = bookingRepo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<BookingDTO>>() {
        }.getType());
    }
}
