package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.LoginPojo.LoginPojo;
import com.example.demo.LoginRepository.LoginRipository;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
@RestController
public class LoginController 
{

	@Autowired
	LoginRipository repository;
	
	@PostMapping("/login")
	public LoginPojo validateUser(@RequestBody LoginPojo userlog) {

	System.out.println(userlog);
		List<LoginPojo> login=repository.findAll();
		System.out.println(login);
		for(LoginPojo dblog:login) {
			if(dblog.getEmail().equals(userlog.getEmail()) && dblog.getPassword().equals(userlog.getPassword()))
			{
				return dblog;
		    }
		
		
	}
		return null;
	}
	
	@RequestMapping("/")
	public String home()
	{
		
		return "home.html";
	}
	
	@GetMapping("/getuser")
	public List<LoginPojo> getAllUser(){
		return repository.findAll();
		
	}
	@GetMapping("/user/all")
	public List<LoginPojo> getBookWash() {
		return repository.findAll();
		  
	}
	
}

