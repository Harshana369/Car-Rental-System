package lk.easy_car.spring.repo;

import lk.easy_car.spring.entity.BookingDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingDetailRepo extends JpaRepository <BookingDetail, String> {
}
