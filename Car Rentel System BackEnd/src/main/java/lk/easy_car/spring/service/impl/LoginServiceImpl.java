package lk.easy_car.spring.service.impl;

import lk.easy_car.spring.repo.LoginRepo;
import lk.easy_car.spring.service.LoginService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class LoginServiceImpl implements LoginService {

    @Autowired
    private LoginRepo loginRepo;


    @Override
    public String GetAdminLogin(String id) {
        return loginRepo.getPassword(id);
    }

    @Override
    public String GetPasswordForANic(String id) {
        return loginRepo.getPasswordforNic(id);
    }
}
