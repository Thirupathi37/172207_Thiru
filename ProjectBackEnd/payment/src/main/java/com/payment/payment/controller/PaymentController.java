package com.payment.payment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.payment.payment.model.Customer;
import com.payment.payment.repository.CustomerRepository;


@CrossOrigin(origins="http://localhost:4200")
@RestController

public class PaymentController {
	
	@Autowired
	CustomerRepository repository;
	
	//Random rand = new Random();
	
  @PostMapping("/payment1")
	public String InsertCustomer(@RequestBody Customer customer) 
  {
		 //int code=rand.nextInt(100000);
		// customer.setCouponCode(code);
	     System.out.println(customer);
		repository.save(customer);
		 return "Payment successfully paid";
		 
        
	}
//	 @GetMapping("/username")
//	  public Optional<Customer> findCoupon(@RequestBody Customer customer ) {
//	  String username=customer.getUsername();
//		return repository.findById(username);
//	   
//	  }
//	

}
