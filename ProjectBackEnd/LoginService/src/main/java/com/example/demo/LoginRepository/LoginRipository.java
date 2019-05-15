package com.example.demo.LoginRepository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.LoginPojo.LoginPojo;

public interface LoginRipository  extends MongoRepository<LoginPojo, String>{

}
