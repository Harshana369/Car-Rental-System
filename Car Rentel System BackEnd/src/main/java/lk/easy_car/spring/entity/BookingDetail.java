package lk.easy_car.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class BookingDetail {

    @EmbeddedId
    private BookingDetail_Vehicle_PK bookingDetail_vehicle_pk;

    private String date;


    @ManyToOne
    @JoinColumn(name = "vid", referencedColumnName = "vid", insertable = false, updatable = false)
    private Vehicle vid;

    @ManyToOne
    @JoinColumn(name = "bookingid", referencedColumnName = "bookingid", insertable = false, updatable = false)
    private Booking bookingid;

}
