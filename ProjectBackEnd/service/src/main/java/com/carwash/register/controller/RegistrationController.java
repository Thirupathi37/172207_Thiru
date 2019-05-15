package com.carwash.register.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.carwash.register.model.Registration;
import com.carwash.register.repo.RegistrationRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class RegistrationController
{

	@Autowired
	RegistrationRepository repository;
	
	@PostMapping("/add")
	public boolean addUser(@RequestBody Registration regis) 
	{System.out.println(regis);
		repository.save(regis);
		return true;
	}
	
	
	@GetMapping("/login")
	public boolean validateUser(@RequestBody Registration userlog) {

	System.out.println(userlog);
		List<Registration> login=repository.findAll();
		System.out.println(login);
		for(Registration dblog:login) {
			if(dblog.getEmail().equals(userlog.getEmail())&&dblog.getPassword().equals(userlog.getPassword())) {
				return true;
		}
		
		
	}
		return false;
	}


	@GetMapping("/user/all")
	public List<Registration> getRegistration() {
		return repository.findAll();
	}
	
//	 @GetMapping("/login/{id}")
//	   List<Registration> findByAge(@PathVariable String name) {
//	 
//		 Object user = repository.findById(name);
//	    return (List<Registration>) user;
//	  }
}
