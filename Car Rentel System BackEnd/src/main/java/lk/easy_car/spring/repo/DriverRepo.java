package lk.easy_car.spring.repo;

import lk.easy_car.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DriverRepo extends JpaRepository<Driver, String> {
    @Query(value = "select d.password from Driver d where d.email=?1")
    String getPassword(String id);

    @Query(value = "select d.password from Driver d where d.licenid=?1")
    String getPasswordforNic(String id);
}
