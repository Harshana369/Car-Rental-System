package lk.easy_car.spring.service.impl;

import lk.easy_car.spring.dto.DriverDTO;
import lk.easy_car.spring.entity.Driver;
import lk.easy_car.spring.exception.ValidateException;
import lk.easy_car.spring.repo.DriverRepo;
import lk.easy_car.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    private DriverRepo driverRepo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void addDriver(DriverDTO dto) {
        if (driverRepo.existsById(dto.getLicenid())) {
            throw new ValidateException("Driver Already Exist");
        }
        driverRepo.save(mapper.map(dto, Driver.class));
    }

    @Override
    public DriverDTO searchDriver(String id) {
        Optional<Driver> driver = driverRepo.findById(id);
        if (driver.isPresent()) {
            return mapper.map(driver.get(), DriverDTO.class);
        }
        return null;
    }

    @Override
    public ArrayList<DriverDTO> getAllDrivers() {
        List<Driver> all = driverRepo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<DriverDTO>>() {
        }.getType());
    }

    @Override
    public void updateDriver(DriverDTO dto) {
        if (driverRepo.existsById(dto.getLicenid())) {
            driverRepo.save(mapper.map(dto, Driver.class));
        }
    }

    @Override
    public String GetDriverPassword(String id) {
        return driverRepo.getPassword(id);
    }

    @Override
    public String GetPasswordForDNic(String id) {
        return driverRepo.getPasswordforNic(id);
    }
}
