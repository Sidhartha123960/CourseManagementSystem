package com.genowti.backprocess.signup.service;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.genowti.backprocess.signup.entity.Signupuser;
import com.genowti.backprocess.signup.repository.Signupuserrepository;
import com.genowti.backprocess.signup.encryption.Passwordencryptedimpl;

@Service
public class Signupuserimpl implements Signupservice
{
      @Autowired
	  private Signupuserrepository repo; 
	
	@Override
	public Signupuser insert(Signupuser user) 
	{  	 
		Passwordencryptedimpl encrytedpass = new Passwordencryptedimpl();
		Signupuser encryptedpassuser =	encrytedpass.encryted(user);
		return repo.save(encryptedpassuser);
    }
}