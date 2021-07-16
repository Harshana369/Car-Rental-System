package lk.easy_car.spring.repo;

import lk.easy_car.spring.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LoginRepo extends JpaRepository<Login, String> {
    @Query(value = "select a.password from Login a where a.email=?1")
    String getPassword(String id);



    @Query(value = "select a.password from Login a where a.anic=?1")
    String getPasswordforNic(String id);
}
