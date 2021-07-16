package lk.easy_car.spring.controller;

import lk.easy_car.spring.dto.CustomerDTO;
import lk.easy_car.spring.exception.NotFoundException;
import lk.easy_car.spring.service.CustomerService;
import lk.easy_car.spring.util.StandradResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;


@RestController
@RequestMapping("/api/v1/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerService service;


    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity savecustomer(@RequestBody CustomerDTO dto){
        if (dto.getNic().trim().length()<=0) {
            throw new NotFoundException("Customer id cannot br empty");
        }
        service.addCustomer(dto);
        return new ResponseEntity(new StandradResponse("201","ok add customer",dto), HttpStatus.CREATED);
    }
//
//    @PostMapping
//    public ResponseEntity uploadImage(@RequestPart("file") MultipartFile multipartFile) {
//
//        System.out.println(multipartFile.getOriginalFilename());
//        try {
//            String projectpath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
//
//            File uploadsDir = new File(projectpath + "/uploads");
//            uploadsDir.mkdir();
//
//            multipartFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + multipartFile.getOriginalFilename()));
//        } catch (URISyntaxException e) {
//            e.printStackTrace();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//
//        String filepath = "E:/Easy_Car/target/Easy_Car-1.0.0/uploads/" + multipartFile.getOriginalFilename();
//
//        StandradResponse standardResponse = new StandradResponse("200", "Success!", filepath);
//        return new ResponseEntity(standardResponse, HttpStatus.OK);
//    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity deleteCustomer(@RequestParam String id) {
        service.deleteCustomer(id);
        return new ResponseEntity(new StandradResponse("200", "Done", null), HttpStatus.OK);
    }


    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllCustomers() {
        ArrayList<CustomerDTO> allCustomers = service.getAllCustomers();
        return new ResponseEntity(new StandradResponse("200", "Done", allCustomers), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity searchCustomer(@PathVariable String id) {
        System.out.println(id);
        CustomerDTO customerDTO = service.searchCustomer(id);
        return new ResponseEntity(new StandradResponse("200", "Done", customerDTO), HttpStatus.OK);
    }


    @GetMapping(path = "go/{email}")
    public ResponseEntity searchPassword(@PathVariable String email) {
        String password = service.GetCustLogin(email);
        return new ResponseEntity(new StandradResponse("200", "Done", password), HttpStatus.OK);
    }

    @GetMapping(path = "goNic/{email}")
    public ResponseEntity searchPasswordForNic(@PathVariable String email) {
        String password = service.GetPasswordForCustNic(email);
        return new ResponseEntity(new StandradResponse("200", "Done", password), HttpStatus.OK);
    }



    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateCustomer(@RequestBody CustomerDTO dto) {
        if (dto.getNic().trim().length() <= 0) {
            throw new NotFoundException("No id provided to update");
        }
        service.updateCustomer(dto);
        return new ResponseEntity(new StandradResponse("200", "Done", dto), HttpStatus.OK);
    }







}
