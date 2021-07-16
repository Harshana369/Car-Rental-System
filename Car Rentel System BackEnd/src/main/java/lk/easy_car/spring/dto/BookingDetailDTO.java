package lk.easy_car.spring.dto;

import lk.easy_car.spring.entity.BookingDetail_Vehicle_PK;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class BookingDetailDTO {
    private BookingDetail_Vehicle_PK bookingDetail_vehicle_pk;
    private String date;
}
