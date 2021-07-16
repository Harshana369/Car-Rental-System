package lk.easy_car.spring.controller;

import lk.easy_car.spring.dto.DriverDTO;
import lk.easy_car.spring.exception.NotFoundException;
import lk.easy_car.spring.service.DriverService;
import lk.easy_car.spring.util.StandradResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/v1/driver")
@CrossOrigin
public class DriverController {

    @Autowired
    private DriverService service;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveDriver(@RequestBody DriverDTO dto) {
        if (dto.getLicenid().trim().length() <= 0) {
            throw new NotFoundException("Driver id cannot be empty");
        }
        service.addDriver(dto);
        return new ResponseEntity(new StandradResponse("201", "Done", dto), HttpStatus.CREATED);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllDrivers() {
        ArrayList<DriverDTO> allDrivers = service.getAllDrivers();
        return new ResponseEntity(new StandradResponse("200", "Done", allDrivers), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity searchDriver(@PathVariable String id) {
        DriverDTO driverDTO = service.searchDriver(id);
        return new ResponseEntity(new StandradResponse("200", "Done", driverDTO), HttpStatus.OK);
    }




    @GetMapping(path = "go/{email}")
    public ResponseEntity searchPassword(@PathVariable String email) {
        String password = service.GetDriverPassword(email);
        return new ResponseEntity(new StandradResponse("200", "Done", password), HttpStatus.OK);
    }


    @GetMapping(path = "goNic/{email}")
    public ResponseEntity searchPasswordForNic(@PathVariable String email) {
        String password = service.GetPasswordForDNic(email);
        return new ResponseEntity(new StandradResponse("200", "Done", password), HttpStatus.OK);
    }








    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateDriver(@RequestBody DriverDTO dto) {
        if (dto.getLicenid()
                .trim().length() <= 0) {
            throw new NotFoundException("No id provided to update");
        }
        service.updateDriver(dto);
        return new ResponseEntity(new StandradResponse("200", "Done", dto), HttpStatus.OK);
    }


}
