package com.carwash.demo.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.carwash.demo.model.Bookwashservice;
import com.carwash.demo.repo.Repository;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class Controller 
{
	@Autowired
	private Repository repo;
	
	@PostMapping("/bookWash")
	void bookWash(@RequestBody Bookwashservice vehicle ) {
		System.err.println(vehicle);
      
		repo.save(vehicle);
		
	}

	@GetMapping("/getuser")
	public List<Bookwashservice> getAllUser()
	{
		return repo.findAll();
	}
	
	@GetMapping("/user/all")
	public List<Bookwashservice> getBookWash() {
		return repo.findAll();
	}
	
}
