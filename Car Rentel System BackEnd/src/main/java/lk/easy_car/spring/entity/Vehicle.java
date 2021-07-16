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
public class Vehicle {
    @Id
    private String vid;
    private String brand;
    private String type;
    private String front_image;
    private String back_image;
    private String left_image;
    private String right_image;
    private int no_of_passenger;
    private String transmission_type;
    private String fuel_type;
    private double daily_price;
    private double monthly_price;
    private double extra_km_price;
    private int dayly_free_km;
    private int month_free_km;
    private String color;
}
