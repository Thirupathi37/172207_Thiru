package com.payment.payment.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="payment")
public class Customer {

	private String email;
	String nameoncard;
	@Id
	String creditcardnumber;
	String expmonth;
	String expyear;
	String cvv;
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Customer(String email, String nameoncard, String creditcardnumber, String expmonth, String expyear,
			String cvv) {
		super();
		this.email = email;
		this.nameoncard = nameoncard;
		this.creditcardnumber = creditcardnumber;
		this.expmonth = expmonth;
		this.expyear = expyear;
		this.cvv = cvv;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNameoncard() {
		return nameoncard;
	}
	public void setNameoncard(String nameoncard) {
		this.nameoncard = nameoncard;
	}
	public String getCreditcardnumber() {
		return creditcardnumber;
	}
	public void setCreditcardnumber(String creditcardnumber) {
		this.creditcardnumber = creditcardnumber;
	}
	public String getExpmonth() {
		return expmonth;
	}
	public void setExpmonth(String expmonth) {
		this.expmonth = expmonth;
	}
	public String getExpyear() {
		return expyear;
	}
	public void setExpyear(String expyear) {
		this.expyear = expyear;
	}
	public String getCvv() {
		return cvv;
	}
	public void setCvv(String cvv) {
		this.cvv = cvv;
	}
	@Override
	public String toString() {
		return "Customer [email=" + email + ", nameoncard=" + nameoncard + ", creditcardnumber=" + creditcardnumber
				+ ", expmonth=" + expmonth + ", expyear=" + expyear + ", cvv=" + cvv + "]";
	}
	
}
