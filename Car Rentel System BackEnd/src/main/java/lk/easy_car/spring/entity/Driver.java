package lk.easy_car.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString

public class Driver {
    @Id
    private String licenid;
    private String address;
    private String email;
    private Integer phn;
    private String password;

}
