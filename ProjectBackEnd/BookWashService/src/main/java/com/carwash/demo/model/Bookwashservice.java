
package com.carwash.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="bookwashservice")
public class Bookwashservice 
{
	private String email;
	private String location;
	private String date;
	
	
	public Bookwashservice() {
		super();
		
	}


	public Bookwashservice(String email, String location, String date) {
		super();
		this.email = email;
		this.location = location;
		this.date = date;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getLocation() {
		return location;
	}


	public void setLocation(String location) {
		this.location = location;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}


	@Override
	public String toString() {
		return "Bookwashservice [email=" + email + ", location=" + location + ", date=" + date + "]";
	}
	
	
}
