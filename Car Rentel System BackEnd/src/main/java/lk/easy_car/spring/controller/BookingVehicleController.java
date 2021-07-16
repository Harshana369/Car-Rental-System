package lk.easy_car.spring.controller;

import lk.easy_car.spring.dto.BookingDTO;
import lk.easy_car.spring.exception.NotFoundException;
import lk.easy_car.spring.service.BookingVehicleService;
import lk.easy_car.spring.util.StandradResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/v1/booking")
@CrossOrigin
public class BookingVehicleController {

    @Autowired
    private BookingVehicleService service;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveBooking(@RequestBody BookingDTO dto) {

        if (dto.getBookingid().trim().length() <= 0) {
            throw new NotFoundException("Booking id cannot be empty");
        }
        service.comformBooking(dto);

        return new ResponseEntity(new StandradResponse("201", "Done", dto), HttpStatus.CREATED);
    }


    @DeleteMapping(params = {"id"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity deleteBooking(@RequestParam String id) {
        service.deleteBooking(id);
        return new ResponseEntity(new StandradResponse("200", "Done", null), HttpStatus.OK);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllBooking() {
        ArrayList<BookingDTO> allBooking = service.getAllBooking();
        return new ResponseEntity(new StandradResponse("200", "Done", allBooking), HttpStatus.OK);
    }


}
