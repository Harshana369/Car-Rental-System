package lk.easy_car.spring.service;

import lk.easy_car.spring.dto.CustomerDTO;

import java.util.ArrayList;

public interface CustomerService {
    void addCustomer(CustomerDTO dto);

    CustomerDTO searchCustomer(String id);

    ArrayList<CustomerDTO> getAllCustomers();

    void updateCustomer(CustomerDTO dto);

    void deleteCustomer(String id);


    String GetCustLogin(String email);

    String GetPasswordForCustNic(String email);
}
