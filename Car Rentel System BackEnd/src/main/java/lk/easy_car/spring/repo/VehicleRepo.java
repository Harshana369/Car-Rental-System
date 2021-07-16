package lk.easy_car.spring.repo;

import lk.easy_car.spring.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepo extends JpaRepository<Vehicle, String> {

}
