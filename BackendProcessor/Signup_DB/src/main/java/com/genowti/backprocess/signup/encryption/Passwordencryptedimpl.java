package com.genowti.backprocess.signup.encryption;

import com.genowti.backprocess.signup.entity.Signupuser;
import java.util.Base64;

public class Passwordencryptedimpl implements Passwordencryption
{

	@Override
	public Signupuser encryted(Signupuser user) 
	{
		 String pass = user.getEncrypted_password(); 
		 String conpass = user.getConfirm_encrypted_password();
		 String encryptedpass =  Base64.getEncoder().encodeToString(pass.getBytes());
		 String encryptedconpass = Base64.getEncoder().encodeToString(conpass.getBytes());
		 user.setEncrypted_password(encryptedpass);
		 user.setConfirm_encrypted_password(encryptedconpass);
		 return user; 
    }	
}