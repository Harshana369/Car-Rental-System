package lk.easy_car.spring.controller;


import lk.easy_car.spring.service.LoginService;
import lk.easy_car.spring.util.StandradResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {

    @Autowired
    private LoginService service;


    @GetMapping(path = "go/{email}")
    public ResponseEntity searchPassword(@PathVariable String email) {
        String password = service.GetAdminLogin(email);
        return new ResponseEntity(new StandradResponse("200", "Done", password), HttpStatus.OK);
    }

    @GetMapping(path = "goNic/{email}")
    public ResponseEntity searchPasswordForNic(@PathVariable String email) {
        String password = service.GetPasswordForANic(email);
        return new ResponseEntity(new StandradResponse("200", "Done", password), HttpStatus.OK);
    }


}
