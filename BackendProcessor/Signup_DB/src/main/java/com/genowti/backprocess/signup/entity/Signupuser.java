package com.genowti.backprocess.signup.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;

@Entity
public class Signupuser 
{
	  @Id
	  @GeneratedValue(strategy =  GenerationType.IDENTITY)
      private int id; 
	 
	  @Column
	  private String email; 
	  
	  @Column
	  private String encrypted_password; 
	  
	  @Column
	  private String confirm_encrypted_password; 
	  
	   
 	 public Signupuser() { }

	public Signupuser(int id, String email, String encrypted_password , String confirm_encrypted_password) 
	{
		this.id = id;
		this.email = email;
		this.encrypted_password = encrypted_password; 
		this.confirm_encrypted_password = confirm_encrypted_password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEncrypted_password() {
		return encrypted_password;
	}

	public void setEncrypted_password(String encrypted_password) {
		this.encrypted_password = encrypted_password;
	}

	public String getConfirm_encrypted_password() {
		return confirm_encrypted_password;
	}

	public void setConfirm_encrypted_password(String confirm_encrypted_password) {
		this.confirm_encrypted_password = confirm_encrypted_password;
	}	
}