package lk.easy_car.spring.service;

import lk.easy_car.spring.dto.DriverDTO;

import java.util.ArrayList;

public interface DriverService {

    void addDriver(DriverDTO dto);

    DriverDTO searchDriver(String id);

    ArrayList<DriverDTO> getAllDrivers();

    void updateDriver(DriverDTO dto);

    String GetDriverPassword(String email);

    String GetPasswordForDNic(String email);
}
