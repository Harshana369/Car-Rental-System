package lk.easy_car.spring.repo;

import lk.easy_car.spring.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepo extends JpaRepository <Booking, String> {
}
