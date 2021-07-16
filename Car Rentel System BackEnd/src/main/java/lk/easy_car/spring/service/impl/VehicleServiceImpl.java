package lk.easy_car.spring.service.impl;

import lk.easy_car.spring.dto.VehicleDTO;
import lk.easy_car.spring.entity.Vehicle;
import lk.easy_car.spring.exception.ValidateException;
import lk.easy_car.spring.repo.VehicleRepo;
import lk.easy_car.spring.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {
    @Autowired
    private VehicleRepo vehicleRepo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void addVehicle(VehicleDTO dto) {
        if (vehicleRepo.existsById(dto.getVid())) {
            throw new ValidateException("Vehicle Already Exist");
        }
        vehicleRepo.save(mapper.map(dto, Vehicle.class));
    }

    @Override
    public VehicleDTO searchVehicle(String id) {
        Optional<Vehicle> vehicle = vehicleRepo.findById(id);
        System.out.println(vehicle+"8988989");
        if (vehicle.isPresent()) {
            return mapper.map(vehicle.get(), VehicleDTO.class);
        }
        return null;
    }

    @Override
    public ArrayList<VehicleDTO> getAllVehicle() {
        List<Vehicle> all = vehicleRepo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public void updateVehicle(VehicleDTO dto) {
        if (vehicleRepo.existsById(dto.getVid())) {
            vehicleRepo.save(mapper.map(dto, Vehicle.class));

        }
    }

    @Override
    public void deleteVehicle(String id) {
        if (!vehicleRepo.existsById(id)) {
            throw new ValidateException("No Vehicle for Delete..!");
        }
        vehicleRepo.deleteById(id);
    }



}
