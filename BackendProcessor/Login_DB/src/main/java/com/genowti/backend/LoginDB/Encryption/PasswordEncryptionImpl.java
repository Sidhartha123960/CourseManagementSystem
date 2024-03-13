package com.genowti.backend.LoginDB.Encryption;

import java.util.Base64;

import com.genowti.backend.LoginDB.entity.User;

public class PasswordEncryptionImpl implements Passwordencryption 
{
	@Override
	public User Passwordprotect(User user) 
	{
		 String pass = user.getEncrypted_password();
		 String encrptedpass =  Base64.getEncoder().encodeToString(pass.getBytes());
		 user.setEncrypted_password(encrptedpass);
		 return user;		 		
	} 
}