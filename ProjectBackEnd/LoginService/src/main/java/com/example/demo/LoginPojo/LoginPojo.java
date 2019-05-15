package com.example.demo.LoginPojo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "registraion")
public class LoginPojo 
{
	@Id
	private String email;
	private String password;
	
	public LoginPojo() {
		super();
		// TODO Auto-generated constructor stub
	}
	public LoginPojo(String email, String password) {
		super();
		this.email = email;
		this.password = password;
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
	@Override
	public String toString() {
		return "LoginPojo [email=" + email + ", password=" + password + "]";
	}
	
	
	
}
