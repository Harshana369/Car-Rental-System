package lk.easy_car.spring.dto;


import lk.easy_car.spring.entity.Booking;
import lk.easy_car.spring.entity.BookingDetail;
import lk.easy_car.spring.entity.Customer;
import lk.easy_car.spring.entity.Vehicle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class BookingDTO {

    private String bookingid;
    private VehicleDTO vid;
    private String startlocation;
    private String closelocation;
    private String bankslip;
    private String status;
    private String driverstatus;
    private CustomerDTO nic;
    private List<BookingDetail> bookingDetailList = new ArrayList<>();

}
