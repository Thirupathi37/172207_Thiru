package com.carwash.dailytasks;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class DailytaskController {

	@Autowired
	DailytaskRepo  repo;
	
	@GetMapping("/getallusers")
	public
	List<Dailytask> getAllUser(){
		return repo.findAll();
		}
	
		
		
	}

	

