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
public class Booking {

    @Id
    private String bookingid;

    private String startlocation;
    private String closelocation;
    private String bankslip;
    private String driverstatus;
    private String status;


    @ManyToOne
    @JoinColumn(name = "cnic")
    private Customer nic;

    @ManyToOne
    @JoinColumn(name = "vid")
    private Vehicle vid;


    @OneToMany(mappedBy = "bookingid", cascade = CascadeType.ALL)
    private List<BookingDetail> bookingDetail = new ArrayList<>();

}
