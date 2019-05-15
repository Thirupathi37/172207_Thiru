package com.carwash.register.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "registraion")
public class Registration 
{
	
	private String name;
	@Id
	private String email;
	private String password;
	private String phonenumber;
	public Registration() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Registration(String name, String email, String password, String phonenumber) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.phonenumber = phonenumber;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	@Override
	public String toString() {
		return "Registration [name=" + name + ", email=" + email + ", password=" + password + ", phonenumber="
				+ phonenumber + "]";
	}
	
	

}
