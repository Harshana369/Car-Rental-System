package lk.easy_car.spring.service.impl;

import lk.easy_car.spring.dto.CustomerDTO;
import lk.easy_car.spring.entity.Customer;
import lk.easy_car.spring.exception.ValidateException;
import lk.easy_car.spring.repo.CustomerRepo;
import lk.easy_car.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void addCustomer(CustomerDTO dto) {
        if (customerRepo.existsById(dto.getNic())){
            throw new ValidateException("Customer Save");
        }

        customerRepo.save(mapper.map(dto, Customer.class));
    }


    @Override
    public CustomerDTO searchCustomer(String id) {
        Optional<Customer> customer = customerRepo.findById(id);
        if (customer.isPresent()) {
            return mapper.map(customer.get(), CustomerDTO.class);
        }
        return null;
    }

    @Override
    public ArrayList<CustomerDTO> getAllCustomers() {
        List<Customer> all = customerRepo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<CustomerDTO>>() {
        }.getType());
    }

    @Override
    public void updateCustomer(CustomerDTO dto) {
        if (customerRepo.existsById(dto.getNic())) {
            customerRepo.save(mapper.map(dto, Customer.class));

        }
    }

    @Override
    public void deleteCustomer(String id) {
        if (!customerRepo.existsById(id)) {
            throw new ValidateException("No Customer for Delete..!");
        }
        customerRepo.deleteById(id);
    }

    @Override
    public String GetCustLogin(String id) {
        return customerRepo.getPassword(id);
    }

    @Override
    public String GetPasswordForCustNic(String id) {
        System.out.println(id+"m2");
        return customerRepo.getPasswordforNic(id);
    }


}
