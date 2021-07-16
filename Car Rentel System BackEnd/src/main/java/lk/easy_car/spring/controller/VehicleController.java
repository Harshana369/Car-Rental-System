package lk.easy_car.spring.controller;

import lk.easy_car.spring.dto.VehicleDTO;
import lk.easy_car.spring.exception.NotFoundException;
import lk.easy_car.spring.service.VehicleService;
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
@RequestMapping("/api/v1/vehicle")
@CrossOrigin
public class VehicleController {

    @Autowired
    private VehicleService service;

    @PostMapping(path = "/uplodeimg")
    public ResponseEntity uploadImage(@RequestPart("file") MultipartFile multipartFile) {

        System.out.println("run");

        System.out.println(multipartFile.getOriginalFilename());
        try {
            String projectpath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();

            File uploadsDir = new File(projectpath + "/uploads");
            uploadsDir.mkdir();

            multipartFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + multipartFile.getOriginalFilename()));
        } catch (URISyntaxException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        String filepath = "E:/Easy_Car/target/Easy_Car-1.0.0/uploads/" + multipartFile.getOriginalFilename();

        StandradResponse standardResponse = new StandradResponse("200", "Success!", filepath);
        return new ResponseEntity(standardResponse, HttpStatus.OK);
    }



    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveVehicle(@RequestBody VehicleDTO dto) {
        System.out.println(dto);
        if (dto.getVid().trim().length() <= 0) {
            throw new NotFoundException("Vehicle id cannot be empty");
        }
        service.addVehicle(dto);
        return new ResponseEntity(new StandradResponse("201", "Done", dto), HttpStatus.CREATED);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllVehicle() {

        System.out.println("tytdfdfdfdoooooooooooo");
        ArrayList<VehicleDTO> allVehicle = service.getAllVehicle();
        return new ResponseEntity(new StandradResponse("200", "Done", allVehicle), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity searchVehicle(@PathVariable String id) {
        System.out.println(id);
        VehicleDTO vehicleDTO= service.searchVehicle(id);
        System.out.println(vehicleDTO);
        return new  ResponseEntity(new StandradResponse("200", "Done", vehicleDTO), HttpStatus.OK);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity deleteVehicle(@RequestParam String id) {
        service.deleteVehicle(id);
        return new ResponseEntity(new StandradResponse("200", "Done", null), HttpStatus.OK);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateVehicle(@RequestBody VehicleDTO dto) {
        System.out.println(dto+"ghghg");
        if (dto.getVid().trim().length() <= 0) {
            throw new NotFoundException("No id provided to update");
        }
        service.updateVehicle(dto);
        System.out.println(dto+"out");
        return new ResponseEntity(new StandradResponse("200", "Done", dto), HttpStatus.OK);
    }


}
