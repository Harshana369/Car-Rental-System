package lk.easy_car.spring.service;

import lk.easy_car.spring.dto.VehicleDTO;

import java.util.ArrayList;

public interface VehicleService {
    void addVehicle(VehicleDTO dto);

    VehicleDTO searchVehicle(String id);

    ArrayList<VehicleDTO> getAllVehicle();

    void updateVehicle(VehicleDTO dto);

    void deleteVehicle(String id);

}
