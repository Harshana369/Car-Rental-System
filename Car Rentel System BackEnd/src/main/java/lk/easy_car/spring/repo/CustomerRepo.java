package lk.easy_car.spring.repo;

import lk.easy_car.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CustomerRepo extends JpaRepository<Customer, String>{


    @Query(value = "select c.password from Customer c where c.email=?1")
    String getPassword(String id);


    @Query(value = "select a.password from Customer a where a.nic=?1")
    String getPasswordforNic(String id);


}