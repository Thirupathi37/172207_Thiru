 package com.mebership.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="membership")
public class Membership {
	
	//@Id
	private String email;
	String  membershipName;
	String freewash;
	String polishing;
	public Membership() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Membership(String email, String membershipName, String freewash, String polishing) {
		super();
		this.email = email;
		this.membershipName = membershipName;
		this.freewash = freewash;
		this.polishing = polishing;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMembershipName() {
		return membershipName;
	}
	public void setMembershipName(String membershipName) {
		this.membershipName = membershipName;
	}
	public String getFreewash() {
		return freewash;
	}
	public void setFreewash(String freewash) {
		this.freewash = freewash;
	}
	public String getPolishing() {
		return polishing;
	}
	public void setPolishing(String polishing) {
		this.polishing = polishing;
	}
	@Override
	public String toString() {
		return "Membership [email=" + email + ", membershipName=" + membershipName + ", freewash=" + freewash
				+ ", polishing=" + polishing + "]";
	}
	
}
