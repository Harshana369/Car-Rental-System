package lk.easy_car.spring.exception;


public class NotFoundException extends RuntimeException{

    public NotFoundException(String message) {
        super(message);
    }
}
