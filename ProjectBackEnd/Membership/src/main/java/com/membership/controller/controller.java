package com.membership.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.mebership.model.Membership;
import com.membership.repo.Repository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class controller {
	@Autowired
	Repository membership ;

//@RequestMapping(value = "/membership/{id}", method = RequestMethod.POST)
//public Membership updateEmployee(@PathVariable("id") String id, @RequestBody Membership mem ) {
//	
//	
//	List<Membership> mem1=membership.findAll();
//	   for(Membership mem2:mem1) {
//		  
//			
//		   if(mem2.getMembershipName().equals(id)) {
//			   return 
//			   
//		   }
//			   
//		   }
//	
//}
	@GetMapping("/{id}")
	public String getOneMembership(@PathVariable String id) {
		System.out.println(" coming from UI "+id);
		List<Membership> allMembershipFromDB=membership.findAll();
		System.out.println(allMembershipFromDB);
		for(Membership member:allMembershipFromDB) {
			System.out.println(member.getMembershipName());
			if(member.getMembershipName().equalsIgnoreCase(id)) {
				return "Your MemberShip is"+member.getMembershipName()+"  "+member.getFreewash()+" "+member.getPolishing();
			}
		
		}
		return "Membership Not Found";
	}
	

	
//	@GetMapping("/user/all")
//	public List<Membership> getRegistration() {
//		return membership.findAll();
//	}
}